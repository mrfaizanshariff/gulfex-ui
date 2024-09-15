import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";

import { TextPlugin,ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  scroll: boolean=false;

  constructor() { 
    gsap.registerPlugin(TextPlugin,ScrollTrigger);  
  }

  ngOnInit(): void {
    this.textAnimation();
    gsap.to('.contact-svg',{
      rotate:360,
      ease:'none',
      repeat:-1,
      duration:8
    })
    gsap.from('.hero-section',{
      scrollTrigger:{
        trigger:".hero-section",
        start:"20% 15%",
        end:"5% 5%",
        
        // markers:true,
        onEnterBack:()=>{
          
          this.scroll = false;
          console.log("scrolled Back",this.scroll);
          
        },
        // markers:true,
        onUpdate:()=>{
          this.scroll=true;
          console.log("scrolled",this.scroll);
          
        }
      }
    })
  }
  textAnimation(){
    const tl = gsap.timeline({repeat:0,yoyo:true})
    tl.to("#title",{
      transform: 'skew(-10deg)'
    })
    .to("#title #text1",{
      duration:1, text:"What is",
      color:'black'
    })
    .to("#title #text2",{
      duration:1, text:"GULFEX",
      // fontStyle:"italic",
      color:"#2f4282"
    })
    .set(".callToAction",{text: "Know More"})
    .to(".callToAction",{
      opacity:1,
      padding:'10px',
      transform: 'skew(-10deg)',    })
  }
}
