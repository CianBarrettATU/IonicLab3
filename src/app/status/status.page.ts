import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonRadio,IonRadioGroup, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonList } from '@ionic/angular/standalone'; //import from standalone 
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
     IonList, IonItem, IonLabel, IonRadio, IonRadioGroup, IonButton, IonBackButton, IonButtons]
})
export class StatusPage implements OnInit {
  myStatus:string = ""; //two way data binding
                        //value changing aswell as myStatus
  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){ // ionic life cycle hook
   await this.storage.create();
   this.myStatus = await this.storage.get('status');
  }

  async saveStatus(){
    await this.storage.set('status', this.myStatus)
    .then(
      ()=>{
        this.router.navigate(['/home'])
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    );
  }
}
