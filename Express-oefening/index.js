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

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/submit');
 })

 app.get('/submit', (req, res) => {
    res.render('submit.ejs', {});
  })

  // Add a product to the db
app.post('/submit', (req, res) => {
    var naamInput= req.body.naam;
    var examenInput= req.body.examen;
    var redenInput= req.body.reden;
    /*var datum = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    datum = mm + '/' + dd + '/' + yyyy;  */

    var myobj = { name: naamInput, examen: examenInput, reden: redenInput};
    
    db.collection('inhaal').insertOne(myobj, (err, result) => {
       if (err) throw err
       console.log("Data is opgeslagen")
    })

    res.redirect('/search_name');
    
  })

    app.get('/search_name', (req, res) => {
      res.render('search_name.ejs', {});
  }) 

    app.post('/search_name_result', (req, res) => {
    var query = { name: req.body.name }
    var list = [];
    db.collection('products').find(query).toArray((err, result) => {
        if (err) throw err
        console.log("Naam wordt opgezocht");
        res.redirect('/search_name_result', {list: result});
      });
});

app.get('/search_name_result', (req, res) => {
    res.render('search_name_result.ejs', {list: result});
}) 

