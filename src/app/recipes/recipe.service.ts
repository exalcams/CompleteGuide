import { Injectable } from "@angular/core";

import { ShoppingListService } from "./../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Mutton Biryani recipe",
      "Delicious mutton biryani",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mutton_biryani.JPG/800px-Mutton_biryani.JPG",
      [new Ingredient("Mutton", 1)],
    ),
    new Recipe(
      "Chicken Biryani recipe",
      "Delicious chicken biryani",
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Biryani_with_chicken.jpg",
      [new Ingredient("Chicken", 1)],
    ),
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
