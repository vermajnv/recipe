import {Component, EventEmitter, Output, Input, input} from '@angular/core';

@Component({
    'selector' : 'app-header',
    'templateUrl' : './header.component.html',
    'styleUrls' : ['./header.component.css'],
})

export class HeaderComponent {
    @Output() menuChangeEvent  = new EventEmitter<string>();
    
    @Input() selectedHeaderMenu;
    
    onChangeMenu(menuTite : string)
    {
        this.menuChangeEvent.emit(menuTite);
    }
}