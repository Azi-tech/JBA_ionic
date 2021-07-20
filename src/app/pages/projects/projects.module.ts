import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectPageRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';



@NgModule({
  declarations: [ProjectsComponent,ProjectDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectPageRoutingModule
    
  ],
  // bootstrap:[HomeComponent]
})
export class ProjectModule { }
