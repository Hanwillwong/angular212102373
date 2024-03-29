import { Component , Input , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router : Router) {}

  @Input() moduleName : string ="";
  signout(): void {
    sessionStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
