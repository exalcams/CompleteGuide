import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
