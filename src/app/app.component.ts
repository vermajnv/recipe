import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe';
  
  @Output() menuTitle : string = 'recipe';

  onNavigate(menu : string)
  {
    this.menuTitle = menu;
  }
}
