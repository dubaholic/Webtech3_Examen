import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListDateComponent } from './pokemon-list-date.component';

describe('PokemonListDateComponent', () => {
  let component: PokemonListDateComponent;
  let fixture: ComponentFixture<PokemonListDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
