import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EnquiryComponent } from './enquiry.component';
import { EnquiryPageRoutingModule } from './enquiry-routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [EnquiryComponent,DetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquiryPageRoutingModule
    
  ],
  // bootstrap:[HomeComponent]
})
export class EnquiryModule { }
