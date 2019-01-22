const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/examen', { useNewUrlParser: true },
 (err, database) => {
    if (err) return console.log(err)
    db = database.db('inhaal')
    //de express applicatie wordt gedeployed op poort 4000
    app.listen(process.env.PORT || 4000, () => {
      console.log('Listening on port 4000')
    })
}) 

app.get('/', (req, res) => {
    res.redirect('/submit');
 })

 app.get('/submit', (req, res) => {
    res.render('submit.ejs', {});
  })

  // Add a product to the db
app.post('/submit', (req, res) => {
    var naam= req.body.naam;
    var examen= req.body.examen;
    var reden= req.body.reden;
    var datum = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    datum = mm + '/' + dd + '/' + yyyy;
    
    db.collection('inhaal').insert(req.body, (err, result) => {
       if (err) throw err
    })
    
  })

  app.get('/search_name', (req, res) => {
      res.render('search_name.ejs', {});
  })

  // find pokemons between 2 dates
app.post('/search_name', (req, res) => {
    var query = { name: req.body.name }
    var list = [];
    db.collection('products').find(query).toArray(function(err, result) {
        if (err) throw err
        list.push(result);
      });

      res.render('search_name_result.ejs', {list});
});

