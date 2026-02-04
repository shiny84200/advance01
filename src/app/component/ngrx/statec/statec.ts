import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from '../selector';
import { decreamnent, inc } from '../action';

@Component({
  selector: 'app-statec',
  imports: [AsyncPipe],
  templateUrl: './statec.html',
  styleUrl: './statec.scss',
})
export class Statec implements OnInit{
data: any;
constructor(public store :Store){

}
ngOnInit(){
this.data = this.store.select(selectCount)
}
add(){
  this.store.dispatch(inc())
}
remove(){
  this.store.dispatch(decreamnent())
}
}
