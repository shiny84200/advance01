import { Component } from '@angular/core';
import { combineLatest, concat, delay, forkJoin, merge, of } from 'rxjs';

@Component({
  selector: 'app-reactiveoperators',
  imports: [],
  templateUrl: './reactiveoperators.html',
  styleUrl: './reactiveoperators.scss',
})
export class Reactiveoperators {
constructor(){
  let obs1 =of(1,2,3).pipe(delay(5000))
  let obs2 =of(5,6,7).pipe(delay(2000))
  forkJoin([obs1,obs2]).subscribe((data)=>{
    console.log(data,"forkjoin")
  })
  combineLatest([obs1,obs2]).subscribe((data)=>{
    console.log(data,"combinelatest")
  })
  merge(obs1,obs2).subscribe((data)=>{
    console.log(data,"merge")
  })
   concat(obs1,obs2).subscribe((data)=>{
    console.log(data,"concat")
  })
}
}
