import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  showMenu: boolean=false;
  menuState: string='out';

  constructor() { }

  ngOnInit(): void {
  }
  menuClick(val:boolean){
    console.log(val);
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.showMenu=val;
  }
}
