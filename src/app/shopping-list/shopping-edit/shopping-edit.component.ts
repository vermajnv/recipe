import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('ingName') nameInputRef : ElementRef;
  @ViewChild('ingAmount') amountInputRef : ElementRef;

  @Output() onAddIngredient = new EventEmitter<Ingredients>();

  addIngredient() 
  {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    this.onAddIngredient.emit(new Ingredients(ingredientName, ingredientAmount))
  }
}
