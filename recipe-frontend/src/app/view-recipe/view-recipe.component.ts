import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipeById(recipeId)
      .subscribe(recipe => this.recipe = recipe);
  }
}
