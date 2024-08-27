import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  menuClick(val:boolean){
    console.log(val);
    
    this.showMenu=val;
    if(val==true){
      gsap.fromTo('.menu',{opacity:0,y:-40},{y:0,opacity:1})
    }else{
      gsap.to('.menu',{opacity:0,y:-40})
    }
  }
}
