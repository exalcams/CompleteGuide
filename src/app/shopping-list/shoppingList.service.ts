import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient('Apples', 15), new Ingredient('Orange', 25)];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
