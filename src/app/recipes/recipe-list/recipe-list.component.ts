import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe(
      'A test recipe',
      'kame hame haa',
      'https://media.defense.gov/2015/Nov/16/2001318253/431/300/0/151123-A-YG824-001.JPG'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
