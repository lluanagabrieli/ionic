import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbellOutline, eyedropOutline, locationOutline, pawOutline, timeOutline } from 'ionicons/icons';
import { Autoplay, Keyboard, Pagination, Scrollbar } from 'swiper/modules';
0
@Component({
  selector: 'app-fepi',
  templateUrl: './fepi.page.html',
  styleUrls: ['./fepi.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonCardContent, IonIcon, IonItem, IonLabel, IonCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FepiPage {
  swiperModules = [Autoplay, Pagination, Keyboard, Scrollbar];

  constructor() {
    addIcons({locationOutline,timeOutline,barbellOutline,pawOutline,eyedropOutline});
  }
}
