import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class HeaderComponent implements OnInit,OnChanges {
  showMenu: boolean=false;
  menuState: string='out';
  @Input() scroll: boolean = false;
  isHomePage: boolean = false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    
    this.isHomePage = this.route.snapshot.url.length === 0 || this.route.snapshot.url[0].path === 'contact' ? true : false;
    console.log(this.isHomePage);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.scroll)
    if(this.scroll){
      gsap.to(".nav",{
        color:"black",
        background:"white",
        duration:0.3,
        // fontWeight:"bold"
      })
    }else{
      gsap.to(".nav",{
        color:"white",
        background:"transparent",
        duration:0.3,
      })
    }
  }
  menuClick(val:boolean){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.showMenu=val;
  }
}
