import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { IonBadge, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonRouterLink, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonBadge, IonText, RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonRouterLink, IonLabel, IonIcon],
})
export class Tab3Page {
  constructor() {
    addIcons({
      arrowForwardOutline
    })
  }
}
