import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen  = false;

    constructor(private elementRef : ElementRef, private renderrer : Renderer2)
    {

    }

    @HostListener('document:click', ['$event']) onClick(eventData : Event)

    {
        // this.isOpen = !this.isOpen;
        // Close on clicking anywhere

        this.isOpen = this.elementRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
        // this.elementRef.nativeElement.parentElement.classList.toggle('open');
    }

}