import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model'; // Assuming you have a recipe model defined

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:3000'; // Base URL of your backend API

  constructor(private http: HttpClient) { }

  getRecipeById(recipeId: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/recipes/${recipeId}`);
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes`);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.baseUrl}/recipes`, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}/recipes/${recipe.id}`, recipe);
  }

  deleteRecipe(recipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/recipes/${recipeId}`);
  }

  // Define the method to fetch the description from the backend
  getDescriptionFromBackend(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/description`);
  }
}
