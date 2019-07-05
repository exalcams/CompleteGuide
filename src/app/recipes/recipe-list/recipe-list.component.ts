import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Mutton Biryani recipe', 'Delicious mutton biryani', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mutton_biryani.JPG/800px-Mutton_biryani.JPG'),
    new Recipe('Chicken Biryani recipe', 'Delicious chicken biryani', 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Biryani_with_chicken.jpg')
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
