import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CustomePipe } from './component/services/custome-pipe';
import { Structural } from './component/services/directive/structural';
import { Attribute } from './component/services/directive/attribute';
import { Errordirective } from './component/services/directive/errordirective';
import { Dynamiccom } from './component/compoenents(demo)/dynamiccom/dynamiccom';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomePipe, Structural, Attribute,Errordirective,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit,AfterViewInit {
  protected readonly title = signal('doit');
  @ViewChild('container',{read: ViewContainerRef}) container! : ViewContainerRef
  constructor(public render2: Renderer2, public el: ElementRef) {

  }
  ngOnInit() {
    // let element = this.render2.createElement('button')
    // let text = this.render2.createText("click me")
    // this.render2.appendChild(element, text)
    // this.render2.setStyle(element, 'color', 'pink')
    // this.render2.setStyle(element, 'backgroundColor', 'black')
    // this.render2.listen(element, 'click', () => {
    //   alert('button clicked')
    //   let div1 = this.render2.createElement('div')
    //   this.render2.appendChild(div1,this.render2.createText("shiny div added"))
    //   this.render2.insertBefore(this.el.nativeElement,div1,element)
    // })
    // this.render2.appendChild(this.el.nativeElement, element,)


   
   

  }
   ngAfterViewInit() {
    if (true) {
      this.container.clear();
      this.container.createComponent(Dynamiccom);
    }
  }
}
