import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    username: string = '';
    password: string = '';

    login(){
      alert(`Hi ${this.username} this project is under development.`);
    }

}
