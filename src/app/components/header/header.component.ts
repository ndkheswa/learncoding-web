import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    // not implemented
  }

  logout() {
    // not implemented
  }

}
