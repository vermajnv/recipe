import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})

export class RecipeListComponent {
  @Input() recipes : Recipe[] = [
    new Recipe('A test recipe', 'This is the first description', './assets/images/recipe.webp')
  ];

  constructor()
  {

  }
}
