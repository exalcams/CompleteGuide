import { ShoppingListService } from './../shopping-list/shoppingList.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Mutton Biryani recipe',
      'Delicious mutton biryani',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mutton_biryani.JPG/800px-Mutton_biryani.JPG',
      [new Ingredient('Mutton', 1)]
    ),
    new Recipe(
      'Chicken Biryani recipe',
      'Delicious chicken biryani',
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Biryani_with_chicken.jpg',
      [new Ingredient('Chicken', 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
