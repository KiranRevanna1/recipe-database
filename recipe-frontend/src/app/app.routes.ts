import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // Redirect to /recipes by default
  { path: 'recipes', component: RecipesComponent },
  { path: 'view-recipe/:id', component: ViewRecipeComponent },
  { path: 'edit-recipe/:id', component: EditRecipeComponent },
  { path: 'create-recipe', component: CreateRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
