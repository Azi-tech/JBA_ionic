import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { ProjectPageRoutingModule } from './project-routing.module';

import { MediaComponent } from './media.component';
import { MediaPageRoutingModule } from './media-routing.module';




@NgModule({
  declarations: [MediaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ProjectPageRoutingModule
    MediaPageRoutingModule
    
  ],
  // bootstrap:[HomeComponent]
})
export class MediaModule { }
