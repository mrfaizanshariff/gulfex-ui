import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";

import { TextPlugin,ScrollTrigger } from 'gsap/all';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  servicesData=[
    {
      title:"Life Insurance",
      desc:"Ensure your family's financial security with our comprehensive life insurance policies. At GULFEX, we understand that protecting your loved ones is a top priority, which is why we offer tailored coverage designed to meet your specific needs. Our life insurance solutions provide peace of mind, ensuring that in the event of an unforeseen circumstance, your family is safeguarded against financial hardship. With a range of options, from term life to whole life policies, we help you choose the best plan to secure your family’s future.",
      src:"https://images.pexels.com/photos/3036405/pexels-photo-3036405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"General Insurance - Health and Motor",
      desc:"Safeguard your health and your vehicles with our robust general insurance offerings. Our health insurance plans are designed to cover you against medical emergencies, offering comprehensive protection that includes hospitalizations, treatments, and more. Similarly, our motor insurance policies protect your vehicles against accidents, theft, and damages, giving you the confidence to drive worry-free. At GULFEX, we provide the security you need, ensuring that both your health and assets are protected.",
      src:"https://images.unsplash.com/photo-1707779491283-4989f727825f?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title:"Professional Indemnity",
      desc:"Protect your professional reputation with our specialized professional indemnity insurance. In today’s fast-paced business environment, even the most careful professionals can face legal claims arising from errors or negligence in their services. Our professional indemnity coverage shields you from the financial impact of such claims, covering legal costs, settlements, and damages. Whether you're a consultant, lawyer, architect, or any other professional, GULFEX provides the protection you need to continue your work with confidence.",
      src:"https://images.pexels.com/photos/6615230/pexels-photo-6615230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Mutual Funds",
      desc:"Accelerate your wealth-building journey with our expertly managed mutual funds. At GULFEX, we offer a diverse portfolio of mutual fund options, allowing you to invest in a range of assets that align with your financial goals. Our experienced fund managers continuously monitor market trends, adjusting your investments to maximize returns while managing risks. Whether you're a conservative investor or looking for higher growth, our mutual funds provide a strategic pathway to growing your wealth.",
      src:"https://images.pexels.com/photos/342943/pexels-photo-342943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Real Estate: Residential and Commercial",
      desc:"Navigate the real estate market with confidence through our comprehensive residential and commercial property services. Whether you're searching for your dream home or the perfect business space, GULFEX offers expert guidance every step of the way. We provide detailed market insights, assist with property evaluations, and support you through the negotiation and closing process. Our real estate services are designed to simplify your transactions, ensuring that you secure the ideal property at the right price.",
      src:"https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Housing Loan",
      desc:"Turn your dream of homeownership into reality with our flexible housing loan options. At GULFEX, we offer competitive interest rates and personalized repayment plans to make buying your home more affordable. Our housing loans are designed to cater to different financial situations, whether you're a first-time buyer or looking to upgrade. With quick approvals and minimal paperwork, we make the home-buying process smooth and hassle-free, helping you move into your new home with ease.",
      src:"https://images.pexels.com/photos/27641056/pexels-photo-27641056/free-photo-of-new-home-keys.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Business Loan",
      desc:"Empower your business with the financial support it needs to grow and succeed. Our tailored business loan solutions at GULFEX are designed to meet the diverse needs of entrepreneurs and business owners. Whether you're expanding operations, purchasing new equipment, or managing cash flow, we offer quick approvals, competitive rates, and flexible repayment terms to help you achieve your business goals. Let us fuel your business growth with the right financial tools.",
      src:"https://images.pexels.com/photos/7731323/pexels-photo-7731323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title:"Commercial Loan",
      desc:"Expand your commercial ventures with confidence using our specialized commercial loan packages. GULFEX understands the unique financial needs of commercial enterprises, and we offer substantial funding options to help you seize new opportunities. Whether you're acquiring new property, investing in large-scale projects, or expanding your operations, our commercial loans provide the capital you need to drive your business forward. With our support, you can take your commercial ventures to new heights.",
      src:"https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
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
  }
  textAnimation(){
    const tl = gsap.timeline({repeat:0,yoyo:true})
    tl.to("#title",{
      transform: 'skew(-10deg)'
    })
    .to("#title #text1",{
      duration:1, text:"Our",
      color:'black'
    })
    .to("#title #text2",{
      duration:1, text:"Services",
      // fontStyle:"italic",
      color:"blue"
    })
    .set(".callToAction",{text: "Home"})
    .to(".callToAction",{
      opacity:1,
      padding:'10px',
      transform: 'skew(-10deg)',    })
  }

}
