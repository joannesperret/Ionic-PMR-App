import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Liste des utilisateurs',
      url: '/random-user-list',
      icon: 'people'
    },
    {
      title: 'Liste personnage S-W',
      url: '/sw-personnages',
      icon: 'skull'
    },
    {
      title: 'Liste Planetes S-W',
      url: '/sw-planet',
      icon: 'planet'
    },
    {
      title: 'Liste Vaisseaux S-W',
      url: '/sw-ship',
      icon: 'rocket'
    },
    {
      title: 'Liste des films S-W',
      url: '/sw-films',
      icon: 'easel'
    },
    {
      title: 'Cartographie',
      url: '/map',
      icon: 'map'
    }

  ];
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
