import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";

import { TextPlugin,ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  matchMedia:any;
  servicesData=[
    {
      title:"Life Insurance",
      desc:"Secure your family's future with our comprehensive life insurance policies. We offer tailored coverage to protect your loved ones financially in case of unexpected events.",
      src:"https://images.pexels.com/photos/3036405/pexels-photo-3036405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Professional Indemnity",
      desc:"Safeguard your professional reputation with our professional indemnity insurance. We cover legal costs and damages arising from negligence claims in your professional services.",
      src:"https://images.pexels.com/photos/6615230/pexels-photo-6615230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Mutual Funds",
      desc:"Grow your wealth through our diverse portfolio of mutual funds. Our expert fund managers help you navigate the market and achieve your financial goals.",
      src:"https://images.pexels.com/photos/342943/pexels-photo-342943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Real Estate: Residential And Commercial",
      desc:"Find your dream home or ideal business space with our comprehensive real estate services. We offer expert guidance in both residential and commercial property transactions.",
      src:"https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Housing Loan",
      desc:"Make your homeownership dreams a reality with our flexible housing loan options. We provide competitive interest rates and personalized repayment plans to suit your needs.",
      src:"https://images.pexels.com/photos/27641056/pexels-photo-27641056/free-photo-of-new-home-keys.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Business Loan",
      desc:"Fuel your business growth with our tailored business loan solutions. We offer quick approvals and competitive rates to support your entrepreneurial journey.",
      src:"https://images.pexels.com/photos/7731323/pexels-photo-7731323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
  expertiseData=[
    {
      title:"Tailored Financial Solutions",
      desc:"We recognize that each client’s financial needs are distinct. Our dedicated team takes a personalized approach, thoroughly understanding your specific goals and financial landscape to craft strategies that precisely align with your ambitions."
    },
    {
      title:"Unmatched Expertise",
      desc:"Our team of seasoned financial brokers and consultants possesses deep market insights and expertise. We continuously stay ahead of industry trends and regulations to offer you advice that is not only informed but strategically sound."
    },
    {
      title:"Comprehensive Services",
      desc:"From individuals seeking wise investment opportunities to corporations optimizing financial strategies, SMEs pursuing growth, or high-net-worth individuals requiring exclusive private banking services—we deliver tailored solutions for every financial need."
    },
    {
      title:"Client-Focused Commitment",
      desc:"Your success drives us. We prioritize a client-first philosophy, fostering enduring relationships built on trust, transparency, and unwavering integrity."
    },
  ]
  constructor() { 
    gsap.registerPlugin(TextPlugin,ScrollTrigger);  
    this.matchMedia=gsap.matchMedia();
  }

  ngOnInit(): void {
    this.textAnimation();
    gsap.to('.contact-svg',{
      rotate:360,
      ease:'none',
      repeat:-1,
      duration:8
    })
  }
  textAnimation(){
    const tl = gsap.timeline({repeat:0,yoyo:true})
    tl.to("#title",{
      transform: 'skew(-10deg)'
    })
    .to("#title #text1",{
      duration:1, text:"Gulfex",
      color:'blue'
    })
    .to("#title #text2",{
      duration:1, text:"Commercial Broker",
      // fontStyle:"italic",
      color:"black"
    })
    .set(".callToAction",{text: "Know More"})
    .to(".callToAction",{
      opacity:1,
      padding:'10px',
      transform: 'skew(-10deg)',    })
  }
}
