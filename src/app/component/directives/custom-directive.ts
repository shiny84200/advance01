import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirective {

  
  errorDiv!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input')
  onInput() {
    const value = this.el.nativeElement.value;

    // check number properly
    if (isNaN(Number(value))) {
      this.showError();
    } else {
      this.removeError();
    }
  }

  private showError() {
    if (!this.errorDiv) {
      this.errorDiv = this.renderer.createElement('div');
      const text = this.renderer.createText('Invalid input');
      this.renderer.appendChild(this.errorDiv, text);
      this.renderer.setStyle(this.errorDiv, 'color', 'red');

      // append AFTER input
      this.renderer.appendChild(
        this.el.nativeElement.parentNode,
        this.errorDiv
      );
    }
  }

  private removeError() {
    if (this.errorDiv) {
      this.renderer.removeChild(
        this.el.nativeElement.parentNode,
        this.errorDiv
      );
      this.errorDiv = null!;
    }
  }

}
