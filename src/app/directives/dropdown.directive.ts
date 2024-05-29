import { Directive, ElementRef, EventEmitter, HostListener } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})

export class DropdownDirective {
    constructor(private elementRef : ElementRef)
    {

    }

    @HostListener('click') onClick(eventData : Event)

    {
        this.elementRef.nativeElement.parentElement.classList.toggle('open');
    }

}