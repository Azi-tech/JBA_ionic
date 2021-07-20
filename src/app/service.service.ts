import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController,LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient,public toastController: ToastController,  public loadingCtrl: LoadingController,) { }
  baseUrl = "http://localhost:8000/" //local
  // baseUrl = "https://jba-nodejs.herokuapp.com/" //heroku

  
  get(url){
   return this.http.get(this.baseUrl+url)
  }

  post(url,body){
    let headers: HttpHeaders = new HttpHeaders();
    
    headers= headers.append("accept" ,  "*/*")
    headers= headers.append("content-type", "application/json")
    
    return this.http.post(this.baseUrl+url, body, {
      headers: headers
    });
  }
  async successToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color:'primary'
    });
    toast.present();
  }

  async errorToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color:'danger'
    });
    toast.present();
  }

  async loading(message,status) {
    const loading = await this.loadingCtrl.create({
      message: message,
      duration: (Math.random() * 1000) + 500
    });
    if(status==='cancel'){
      await loading.onDidDismiss();
    }else{
      await loading.present();
       
    }
  
    
  }
}
