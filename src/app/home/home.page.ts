import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton , IonButton} from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, RouterLinkWithHref],
})
export class HomePage {
  myHomeStatus:string = "";
  constructor(private storage:Storage) {}

  async ionViewWillEnter(){
    await this.storage.create();
    this.myHomeStatus = await this.storage.get('status')
  }
}
