import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    ViewRecipeComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
