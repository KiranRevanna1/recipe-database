// app.component.ts

import { Component } from '@angular/core';
import { Recipe } from './recipe.model'; // Import your Recipe model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = []; // Initialize recipes array

  constructor() {
    // Initialize or fetch recipes data here
  }
}
