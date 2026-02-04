import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tableservices {
  url: any = 'http://localhost:3000/users'
  constructor(public http: HttpClient) {

  }
  getUsers() {
    let headers = new HttpHeaders({
      authorization: 'Bearer 62786176q478687q267yuihajhhjbnbcbnxbn ',
      content: 'application/json ',

    })

    return this.http.get(this.url,{headers})
  }

  createUsers(){
     let headers = new HttpHeaders({
      authorization: 'Bearer 62786176q478687q267yuihajhhjbnbcbnxbn ',
      content: 'application/json ',

    })
  
    let body = {
       
            "name": "babys",
            "age": "1month",
            "job": "to be my child",
            "location": "bangalore",
            "id": 11
        
    }
   return this.http.post(this.url,body,{headers})
  }

  updateUsers(value:number){
       let headers = new HttpHeaders({
      authorization: 'Bearer 62786176q478687q267yuihajhhjbnbcbnxbn ',
      content: 'application/json ',

    })
    let body = {
     
            "job": "Front End Developer",
         
        
    }
   return this.http.patch(`${this.url}/${value}`,body,{headers})
  }
  deleteUser(user:any){

   return this.http.delete(`${this.url}/${user.id}`)
  }
}
