import { Directive, ElementRef, HostListener, Renderer2 ,Input} from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class Attribute {
@Input()  appAttribute : string= 'red'
  constructor(public elementref :ElementRef<any>,public render2 :Renderer2) { }

  @HostListener('mouseenter') m1(){
this.render2.setStyle(this.elementref.nativeElement,'backgroundColor','yellow')
  }
@HostListener('mouseleave') m2(){
this.render2.setStyle(this.elementref.nativeElement,'backgroundColor',this.appAttribute)
  }
}
