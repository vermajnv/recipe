import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients : Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomato', 10)
  ]

  updateIngredientList(ingredientObj : Ingredients)
  {
      this.ingredients.push(ingredientObj);
  }
}
