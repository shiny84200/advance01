import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Guardservices {
  user = signal(false)
  constructor(){

  }
  isLogin(){
    return this.user()
  }
login(){
  return this.user.set(true)
}
logout(){
  return this.user.set(false)
}
}
