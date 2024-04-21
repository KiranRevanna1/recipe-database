import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getAllRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  viewRecipe(recipeId: number) {
    this.router.navigate(['/view-recipe', recipeId]);
  }
}
