import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  createRecipe() {
    const newRecipe: Recipe = {
      id: 0,
      name: 'New Recipe',
      description: [], // Initialize with an empty array
    };

    // Assuming you have a method to get the description string from the backend
    this.recipeService.getDescriptionFromBackend().subscribe((description: string) => {
      // Convert the string description from the backend into an array of strings
      newRecipe.description = [description];
      
      // Now you can use the newRecipe object to create the recipe
      this.recipeService.createRecipe(newRecipe).subscribe((createdRecipe) => {
        console.log('Recipe created successfully:', createdRecipe);
        // Optionally, redirect to the recipes list page or show a success message
      });
    });
  }
}
