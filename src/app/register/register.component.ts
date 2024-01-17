import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   

  firstname = "mohammed"
  active = true
  datalist = [
    {name : "mohammed" , code :189 , country:"iraq"},
    {name : "mohammed" , code :189 , country:"iraq"},
    {name : "mohammed" , code :189 , country:"iraq"},
  ]
  name = "mohammed"
}
