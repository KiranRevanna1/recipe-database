import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recipes: any[] = [];
  selectedRecipe: any; // Declare selectedRecipe property here

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.http.get<any[]>('http://localhost:3000/recipes').subscribe(
      (response) => {
        this.recipes = response;
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  viewRecipe(recipe: any) {
    this.selectedRecipe = recipe;
    console.log("Viewing recipe:", recipe);
  }

  editRecipe(recipe: any) {
    this.selectedRecipe = recipe;
    console.log("Editing recipe:", recipe);
  }

  deleteRecipe(recipe: any) {
    console.log("Deleting recipe:", recipe);
  }
}
