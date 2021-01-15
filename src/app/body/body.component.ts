import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  navbarOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBar(){
    this.navbarOpened = !this.navbarOpened;
  }


}
