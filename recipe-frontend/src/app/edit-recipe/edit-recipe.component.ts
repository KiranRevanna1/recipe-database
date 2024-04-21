import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  recipeId: number | null = null;
  recipe: Recipe | undefined; // Initialize as undefined

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const recipeIdParam = this.route.snapshot.paramMap.get('id');
    this.recipeId = recipeIdParam ? +recipeIdParam : null; // Check if recipeIdParam is not null

    if (this.recipeId !== null) {
      this.fetchRecipe();
    }
  }

  fetchRecipe() {
    if (this.recipeId !== null) {
      this.recipeService.getRecipeById(this.recipeId).subscribe(recipe => {
        this.recipe = recipe;
      });
    }
  }

  updateRecipe() {
    if (this.recipeId !== null && this.recipe !== undefined) {
      this.recipeService.updateRecipe(this.recipe).subscribe(updatedRecipe => {
        console.log('Recipe updated successfully:', updatedRecipe);
        // Optionally, redirect to the view recipe page or show a success message
      });
    }
  }
}
