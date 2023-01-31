import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails : Cocktail[]=[
    {
      name: "Sex on the beach",
      price: 10,
      image: "http://chut-je-cuisine.com/wp-content/uploads/2014/07/sex-on-the-beach-cocktail.jpg"
    },
    {
      name: "Marguarita",
      price: 13,
      image: "https://st2.depositphotos.com/2734517/7793/i/600/depositphotos_77937758-stock-photo-margarita-cocktail.jpg"
    },
    {
      name: "Martini",
      price: 8,
      image: "https://st.depositphotos.com/1177973/1495/i/450/depositphotos_14954547-stock-photo-martini-glass-and-olives-isolated.jpg"
    }
  ]

  constructor() { }
  public getCocktails(): Cocktail[] {
    return this.cocktails
  };
}
