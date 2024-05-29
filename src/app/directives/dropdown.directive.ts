import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen  = false;

    constructor(private elementRef : ElementRef, private renderrer : Renderer2)
    {

    }

    @HostListener('click') onClick(eventData : Event)

    {
        this.isOpen = !this.isOpen;

        // this.elementRef.nativeElement.parentElement.classList.toggle('open');
    }

}