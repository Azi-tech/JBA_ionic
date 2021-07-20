import { Component, OnInit } from '@angular/core';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {

  constructor(
    public loadingCtrl: LoadingController,
  

  ) { }

  async openSocial(network: string, fab: HTMLIonFabElement) {
   
      window.open('fb:' + '//jbarchitectsandengineers/');

    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
  ngOnInit() {}

}
