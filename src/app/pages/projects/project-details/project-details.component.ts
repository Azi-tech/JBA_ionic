import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ServiceService} from '../../../service.service';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
projectId:any
projectDetails:any
baseUrl=this.http.baseUrl
  constructor(private route:ActivatedRoute,private http:ServiceService) { }

  getDetails(){
    this.http.get("getProjectById?id="+this.projectId)
    .subscribe(res => {
      const data: any = res
      console.log(data.projectDetail)
      this.projectDetails = data.projectDetail
    })
  }
  ngOnInit() {
    console.log("===dddd===")
    console.log("===dddd===",this.route.snapshot.paramMap.get('id'))
    this.projectId = this.route.snapshot.paramMap.get('id')
    this.getDetails()
  }

}
