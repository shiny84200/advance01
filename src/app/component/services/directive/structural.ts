import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class Structural {

  constructor(public containerRef: ViewContainerRef,public templateref :TemplateRef<any>) { }

  @Input() set appStructural(value: any){

    if(value){
this.containerRef.createEmbeddedView(this.templateref)
    }
    else{
      this.containerRef.clear()
    }
  }

}
