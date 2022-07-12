import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template:`
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
