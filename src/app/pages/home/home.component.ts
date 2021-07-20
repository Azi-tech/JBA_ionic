import { Component, OnInit } from '@angular/core';
// import { Slides } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weDo:any=[]
  sildeImages:any = []
  constructor() { }

  getDetail(){
   this.sildeImages=[
    {
      id:1,
      Image:"../../../assets/img/JBA/Beauty_parlour.jpg",
      name:"Beauty Parlour"
    },
    {
      id:2,
      Image:"../../../assets/img/JBA/Deva_plan.jpg",
      name:"Deva Plan"
    },
    {
      id:"1",
      Image:"../../../assets/img/JBA/sadam_residence.jpg",
      name:"Sadam Residence"
    },
   ]


   this.weDo=[
    {
      id:1,
      Image:"../../../assets/img/JBA/jbplanning.jpg",
      name:"Planning"
    },
    {
      id:2,
      Image:"../../../assets/img/JBA/jbexterior.jpg",
      name:"Exterior"
    },
    {
      id:3,
      Image:"../../../assets/img/JBA/jbinterior.jpg",
      name:"Interior"
    }, 
    {
      id:4,
      Image:"../../../assets/img/JBA/jbconsultant.jpg",
      name:"Consultant"
    },
   ]
  }
  ngOnInit() {
    this.getDetail()
  }

}
