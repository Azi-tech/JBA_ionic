import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projectList:Array<any>=[]
  baseUrl=this.http.baseUrl
  catagory:any
  constructor(private router: Router,private http:ServiceService,private route:ActivatedRoute) { }

  getProjectList(){
    this.http.get("getAllProject")
    .subscribe(res => {
      const data: any = res
      console.log(data)
      this.projectList = data.projectList
    })
  }

  getDetail(data){
    console.log(data)
    this.router.navigateByUrl('detail');
  }

  catagoryChange(e){
    var url =""
    if(e == "all"){
      url = "getAllProject"
    }else{
      url = "getAllProject?catagory="+e
    }
    console.log(e)
    this.http.get(url)
    .subscribe(res => {
      const data: any = res
      console.log(data)
      this.projectList = data.projectList
    })
  }


  ngOnInit() {
    this.getProjectList()
    // const sessionId = this.route.snapshot.paramMap.get('id');

  }

}
