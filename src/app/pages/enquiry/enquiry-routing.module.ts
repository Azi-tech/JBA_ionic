import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EnquiryComponent } from './enquiry.component';


const routes: Routes = [
  {
    path: '',
    component: EnquiryComponent
  },
  {
    path: 'enquiry',
    component: EnquiryComponent
  },
  {
    path: 'details/:catagory',
    component: DetailsComponent
  },
//   {
//     path: 'detail/:id',
//     component: ProjectDetailsComponent
//   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryPageRoutingModule { }
