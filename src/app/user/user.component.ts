import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name = "mohammed";
  location="iraq";
  status = 'active';
  
   

  getStatus(){
    return this.status

  }
  getmessage(){
    console.log("my new message")
  }



}
