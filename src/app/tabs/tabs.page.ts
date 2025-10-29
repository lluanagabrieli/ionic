import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenu, IonMenuButton, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipse, pizza, school, square, trailSignSharp, triangle } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonContent, IonButtons, IonTitle, IonToolbar, IonHeader, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenu, IonMenuButton],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square, trailSignSharp, pizza, school });
  }
}
