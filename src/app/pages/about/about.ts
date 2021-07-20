import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

import {ServiceService} from '../../service.service';

import { ActionSheetController } from '@ionic/angular';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage implements OnInit {
  about:any;
  email:any;
  address:any;
  city:any;
  state:any;
  country:any;
  contactDetail:any;
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(public popoverCtrl: PopoverController,private http : ServiceService, public actionSheetCtrl: ActionSheetController,) { }

  getDetails(){
    this.http.get("contactDetail")
    .subscribe(res => {
      const data: any = res
      console.log(data)
      this.contactDetail = data.contact
    })
  
  }
  ngOnInit() {
    this.getDetails()
    // throw new Error('Method not implemented.');
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  async openContact(speaker: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact JB Architect',
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
  
}
