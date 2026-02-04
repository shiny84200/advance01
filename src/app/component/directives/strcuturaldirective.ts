import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStrcuturaldirective]'
})
export class Strcuturaldirective {

  constructor(public el :TemplateRef<any>,public container :ViewContainerRef) { }
@Input() set appStrcuturaldirective(value:any){
if(value){
this.container.createEmbeddedView(this.el)
}
else{
  this.container.clear()
}
}
}
