import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[customBorder]'
})
export class CustomBorderDirective implements OnInit {
    @Input('customBorder') creationDate: Date = new Date;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        const container = this.el.nativeElement;
        const today = new Date();
        const creationDate = this.creationDate;
        const checkingDate = new Date();
        checkingDate.setDate(checkingDate.getDate() - 14);
        if (creationDate < today && creationDate >= checkingDate) {
            this.renderer.setStyle(container, 'border', '1px solid green');
        } else if (creationDate > today) {
            this.renderer.setStyle(container, 'border', '1px solid blue');
        }
    }
}
