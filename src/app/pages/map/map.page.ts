import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, circle } from 'leaflet';
import { Geolocation, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private map: Map;
  public pmrRoubaix = { emplacements: [] };
  public pmrList = {};
  public pmrLocalisation = [];

  // API paramétrée pour appel des 797 emplacements des emplacements PMR de Roubaix
  public UrlPmrRoubaix = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=les-emplacements-de-stationnement-pmr-a-roubaix&q=&rows=797';

  // API paramétrée pour appel des 1 575 emplacements PMR de Lille

  public UrlPmrLille = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=stationnements-reserves-a-lille&q=&rows=1574';

  public coords = [];
  constructor(private geolocation: Geolocation, private http: HttpClient) {
  }

  ngOnInit(): void {
    // Fonction d'appel de l' API de geolocalisation des emplacements PMR de Lille
    this.loadPmrRoubaix(this.UrlPmrLille);
    //.then( toast => toast.present());
    // Correction trouvée sur GitHub
    // To stop notifications
    //watch.unsubscribe();
    // Rafraîchissement position
    //  setTimeout(this.ionViewDidEnter, 5000);
  }

  // Désabonnement lors de la fermeture de l'application
  ngOnDestroy() {
    
  }

  // Fonction d' appel à l' API pour ajout des emplacements PMR Roubaisiens sur la carte

  public loadPmrRoubaix(dataUrl) {
    // Requête HTTP, la méthode get retourne un observable   

    this.http.get(dataUrl)
      // l'observable est résolu par la méthode subscribe
      .subscribe(
        // fonction callback de succès
        (response: any) => {
          // console.log(response);
          this.pmrList = response.records;
          console.log("Promesse");
          // boucle d'ajout de cercle sur chaque coordonnée d'emplacement PMR 
          //this.initMap(position.coords);             
          for (let i = 0; i < 1573; i++) {
            //circle([this.pmrList[i].fields.geo_point_2d],{color: 'blue', radius: 50}).addTo(this.map)
            //.bindPopup('<p>Emplacement PMR</p>');  

            //console.log([this.pmrList[i].fields.geo_point_2d]); 
            this.pmrLocalisation.push(this.pmrList[i].fields.geo_point_2d);
            // console.log(this.pmrLocalisation);
            //  circle([this.pmrList[i].fields.geo_point_2d],{color: 'blue', radius: 50}).addTo(this.map)
            // .bindPopup('<p>Emplacement PMR</p>');  

            //Envoi d’un message pour indiquer la fin du chargement
          }
          console.log("Résolue");

          this.initMap(this.coords);
        });
  }

  public ionViewDidEnter() {
    // this.geolocation.getCurrentPosition()
    //   .then(response => {
    //     this.coords = [response.coords.latitude, response.coords.longitude];
    //     console.log('Position: ' + [response.coords.latitude, response.coords.longitude]);
    //   }).catch((error) => {
    //     console.log('Error getting location', error);
    //   });
    this.geolocation.watchPosition().subscribe(position => {
      if ((position as Geoposition).coords !== undefined) {
        const geoposition = (position as Geoposition);
        console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
        this.coords = [];
        this.coords.push(geoposition.coords.latitude);
        this.coords.push(geoposition.coords.longitude);
        //this.map.setView(this.coords, 16);
        console.log('initMap');
        this.initMap;
        console.log('coords watch' + this.coords);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);
      } else {
        const positionError = (position as PositionError);
        console.log('Error ' + positionError.code + ': ' + positionError.message);
      }
    });
  }

  initMap(coords) {
    // Instanciation de la carte
    this.map = new Map('mapView');
    // Deuxième paramètre correspond au zoom
    this.map.setView(coords, 16);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);
    // console.log('this coords: '+ this.coords);
    console.log('coords ' + coords);

    // setTimeout(this.ionViewDidEnter, 5000);
    // Ajout du marqueur de position à l'instanciation de la carte

    circle(coords, { color: 'blue', radius: 10 }).addTo(this.map).bindPopup('<p>Vous êtes ici!</p>');

    // Ajout d'un marqueur test dans le jardin

    circle([50.704295, 3.252503], { color: 'green', radius: 2 }).addTo(this.map).bindPopup('<p>Place PMR test!</p>');


    // Ajout sur la carte des emplacements PMR de l' API selectionnée
    for (let i = 0; i < 1573; i++) {
      circle(this.pmrList[i].fields.geo_point_2d, { color: 'blue', radius: 5 }).addTo(this.map)
        .bindPopup('<p>Emplacement PMR</p>');
    }

    // Fonction de mise à jour de la position

    this.geolocation.watchPosition().subscribe(position => {
      const geoposition = (position as Geoposition);
      if ((position as Geoposition).coords !== undefined) {
        console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
        // let oldPosition = this.coords;
        console.log('geoposition : ' + geoposition);
        circle(coords).remove();
        this.coords = [];
        this.coords.push(geoposition.coords.latitude);
        this.coords.push(geoposition.coords.longitude);
        coords = [];
        coords = this.coords;
        // this.initMap;
        console.log('setView'+coords);
        this.map.setView(coords,16);        
        console.log('coords watch' + this.coords);
        // Ajout d'un marqueur sur la nouvelle position
        circle(coords, { color: 'green', radius: 5 }).addTo(this.map);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);        
       // circle(coords, { color: 'red', radius: 10 }).addTo(this.map);
      } else {
        const GeolocationPositionError = (position as PositionError);
        console.log('Error ' + GeolocationPositionError.code + ': ' + GeolocationPositionError.message);
      }
    });
  }
}

