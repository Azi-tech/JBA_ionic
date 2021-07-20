import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../../service.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  catagory:any;
  username:any="";
  phone:any;
  interiorDetail:any;
  exteriorDetail:any;
  consultantDetail:any;
  planingDetail:any;
  comment:any;
  


  constructor(private route:ActivatedRoute,private http:ServiceService) { }

  
  submitInterior(form: NgForm){
    var body 
     console.log(form.value)
     if(this.catagory == 'interior'){
        body = {
        name:form.value.username,
        phone:form.value.phone,
        interiorDetail:form.value.interiorDetail,
        comment:form.value.comment
        }
     }else if(this.catagory == 'exterior'){
      body = {
        name:form.value.username,
        phone:form.value.phone,
        exteriorDetail:form.value.exteriorDetail,
        comment:form.value.comment
        }
     }else if(this.catagory == 'consultant'){
      body = {
        name:form.value.username,
        phone:form.value.phone,
        consultantDetail:form.value.consultantDetail,
        comment:form.value.comment
        }
     }else if(this.catagory == 'planning'){
      body = {
        name:form.value.username,
        phone:form.value.phone,
        planningDetail:form.value.planingDetail,
        comment:form.value.comment
        }
     }


  if(!this.username || this.username == ""){
    this.http.errorToast("Please Enter Your Name")
    
  }else  if(!this.phone || this.phone == ""){
    this.http.errorToast("Please Enter Your Mobile No")
  }else  if(!this.comment || this.comment == ""){
    this.http.errorToast("Please Fill Comment")
  }else {
    this.http.loading("Please Wait for Submition",'loading');
    this.http.post("clientAdd/"+this.catagory , body).subscribe(res=> {

          
      console.log("user",res);
      var data:any=res
    
      if(data.success){
        this.username=""
        this.phone=""
        this.interiorDetail=""
        this.exteriorDetail=""
        this.consultantDetail=""
        this.planingDetail=""
        this.comment=""
        this.http.successToast(data.message)
        // setTimeout(() => {
        //   this.http.loading("",'cancel');
        // }, 2000);
        
      }
     
  
    }, err=>{
      // console.log(err)
  
  
  });

  }

  }

  ngOnInit() {
    this.catagory = this.route.snapshot.paramMap.get('catagory')
  }

}
