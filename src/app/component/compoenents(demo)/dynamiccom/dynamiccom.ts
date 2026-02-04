import { Component, OnInit } from '@angular/core';
import { CustomDirective } from '../../directives/custom-directive';
import { Strcuturaldirective } from '../../directives/strcuturaldirective';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Tableservices } from '../../services/tableservices';

@Component({
  selector: 'app-dynamiccom',
  imports: [CustomDirective,Strcuturaldirective,MatAutocompleteModule,MatInputModule,MatFormFieldModule,
    FormsModule,CommonModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './dynamiccom.html',
  styleUrl: './dynamiccom.scss',
})
export class Dynamiccom implements OnInit {
searchControl = new FormControl('')
  options = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
  user={
  "name": "Suresh",
  "age": 30,
  "job": "Front End Developer",
  "skills": ["Angular", "RxJS", "TypeScript"]
}

constructor(public userdata : Tableservices){

}
  ngOnInit() {
    this.userdata.getUsers().subscribe((userdata: any) => {
       userdata.forEach((user:any) => {
      this.options.push(user.name);
    });
    })
  }
}
