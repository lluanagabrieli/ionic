import { Component, inject } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonNote, IonText, IonThumbnail, IonTitle, IonToolbar, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircle, star } from 'ionicons/icons';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonList, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonThumbnail, IonText, IonNote, IonIcon]
})
export class Tab2Page {
  toastController = inject(ToastController);

  constructor() {
    addIcons({
      star, informationCircle
    })
  }

  abrirSite(site: string) {
    window.open(site);
  }

   async exibirToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Local favoritado com sucesso!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
