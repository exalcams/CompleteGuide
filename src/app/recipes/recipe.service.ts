import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Mutton Biryani recipe',
      'Delicious mutton biryani',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mutton_biryani.JPG/800px-Mutton_biryani.JPG'
    ),
    new Recipe('Chicken Biryani recipe', 'Delicious chicken biryani', 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Biryani_with_chicken.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
