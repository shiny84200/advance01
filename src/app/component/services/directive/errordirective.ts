import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appErrordirective]'
})
export class Errordirective implements OnInit {

  constructor(public render2: Renderer2, public el: ElementRef) { }
  ngOnInit() {

  }
  @HostListener('input')
  onInput() {
    const value = this.el.nativeElement.value;
    let errorDiv
    // Check if the input is a number
    if (!isNaN(Number(value)) && value.trim() !== '') {
      // If error div doesn't exist, create it

      if (!errorDiv) {
        errorDiv = this.render2.createElement('div');
        const text = this.render2.createText("The value is invalid");
        this.render2.appendChild(errorDiv, text);
        this.render2.setStyle(errorDiv, 'color', 'red');
        this.render2.appendChild(this.el.nativeElement.parentNode, errorDiv);
      }
    } else {
      // Remove the error if the value is not a number
      if (errorDiv) {
        this.render2.removeChild(this.el.nativeElement.parentNode, errorDiv);
        errorDiv = null;
      }
    }

  }
}
