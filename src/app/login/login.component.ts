import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private renderer: Renderer2){
    this.renderer.addClass(document.body, "login-page");
  }

  ngOnInit(): void {

  }
  nama = 'Hanwill';
  nim = '212102373';
}
