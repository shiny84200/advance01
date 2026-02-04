import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { delay, map, of } from 'rxjs';

@Component({
  selector: 'app-reactivecompoent',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './reactivecompoent.html',
  styleUrl: './reactivecompoent.scss',
})
export class Reactivecompoent implements OnInit {
  reactiveForm: FormGroup
  hide = true
  constructor(public fb: FormBuilder,public route :ActivatedRoute) {
this.route.data.subscribe(data=>{
  console.log(data['resolvedata'])
})
    this.reactiveForm = new FormGroup({
      name: new FormControl('', [Validators.required], [this.asynvalidators]),
      age: new FormControl('', [Validators.required]),
      hobbies: new FormArray([
        new FormControl('', [Validators.required])
      ]),
      address: new FormArray([
        new FormGroup(
          {
            street: new FormControl('', [Validators.required]),
            housenumber: new FormControl('', [Validators.required])
          })
      ],this.arrayvalidator),
      password: new FormControl('', [this.passwordvalid]),
      confirmpassword: new FormControl('', [Validators.required,])


    },

      {
        validators: this.passwordMismatch
      })
  }

  ngOnInit() {
this.route.data.subscribe(data=>{
  console.log(data['resolvedata'])
})
  }
  get hobbies() {
    return this.reactiveForm.get('hobbies') as FormArray
  }
  addHobbies() {
    this.hobbies.push(new FormControl('', [Validators.required]))
  }
  removeHobbies(i: any) {
    this.hobbies.removeAt(i)
  }
  get address() {
    return this.reactiveForm.get('address') as FormArray

  }

  addAddress() {
    this.address.push(
      new FormGroup({
        street: new FormControl('', [Validators.required]),
        housenumber: new FormControl('', [Validators.required])
      })
    )
  }
  deleteAddress(i: any) {
    this.address.removeAt(i)
  }
  passwordvalid(control: AbstractControl) {

    let password = control.value
    let pattern = /^[a-zA-Z\d]{5}$/
    return pattern.test(password) ? null : { invalid: true }
  }
  passwordMismatch(control: AbstractControl) {
    let password = control.get('password')?.value
    let confirmpassword = control.get('confirmpassword')?.value
    return password == confirmpassword ? null : { mismatch: true }

  }

  asynvalidators(control: AbstractControl) {
    let arrays = ["shiny", "xxx"]
    return of(arrays.includes(control.value)).pipe(delay(1000), map((data: any) => data ? { already: true } : null))
  }

  arrayvalidator(control:AbstractControl){
    let controls = control as FormArray
return controls.length > 0 ? null : {oneform : true}
  }
}
