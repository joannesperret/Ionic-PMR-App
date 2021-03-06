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

  public map: Map;
  public pmrRoubaix = { emplacements: [] };
  public pmrList = {};
  public pmrListRoubaix = {};
  public pmrLocalisation = [];
  public souscription = this.geolocation.watchPosition();
  public subscription;
  public emplacement;

  // API paramétrée pour appel des 797 emplacements des emplacements PMR de Roubaix
  public UrlPmrRoubaix = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=les-emplacements-de-stationnement-pmr-a-roubaix&q=&rows=797';

  // API paramétrée pour appel des 1 574 emplacements PMR de Lille

  public UrlPmrLille = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=stationnements-reserves-a-lille&q=&rows=1574';

  // API paramétrée pour appel 37 emplacements PMR de Lambersart

  public UrlPmrLambersart = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=places-pmr0';

  // API paramétrée sur les places de la métropole Lilloise alimentées par open street

  public UrlPmrMetropole = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=places-pmr';
 
  public coords = [];

  constructor(public geolocation: Geolocation, public http: HttpClient) {
  }

  ngOnInit(): void {
    // Test d'initialisation de la carte 
    this.map = new Map('mapView');
    // Initialisation de la liste des emplacements
    this.pmrList = {};
    // Fonction d'appel de l' API de geolocalisation des emplacements PMR de Lille
    this.loadPmrPark(this.UrlPmrLille);
    // Fonction d'appel de l' API de geolocalisation des emplacements PMR de Roubaix
    this.loadPmrPark(this.UrlPmrRoubaix);
    // Fonction d'appel de l' API de geolocalisation des emplacements PMR de Lambersart
    this.loadPmrPark(this.UrlPmrLambersart);
    // Fonction d'appel de l' API de geolocalisation des emplacements de la Métropole
    this.loadPmrPark(this.UrlPmrMetropole);
    // .then( toast => toast.present());
    // this.initMap(this.coords);

  }

  // Fonction d' appel à l' API pour ajout des emplacements PMR sur la carte
  // @param: url API

  public loadPmrPark(dataUrl) {
    // Requête HTTP, la méthode get retourne un observable   

    this.http.get(dataUrl)
      // l'observable est résolu par la méthode subscribe
      .subscribe(
        // fonction callback de succès
        (response: any) => {
          console.log(response);
          this.pmrList = response.records;
          // this.pmrList.push(response.records);
          console.log("Promesse");
          // boucle d'ajout de cercle sur chaque coordonnée d'emplacement PMR 
          //this.initMap(position.coords);             
          let k = 0;
          while (k < Object.keys(this.pmrList).length) {

            // Zone de test du contenu du tableau

            k++;

          }
          //Envoi d’un message pour indiquer la fin du chargement
          console.log("Résolue");

          this.initMap(this.coords);

        });
  }

  public ionViewDidEnter() {
    this.souscription.subscribe(position => {
      if ((position as Geoposition).coords !== undefined) {
        const geoposition = (position as Geoposition);
        console.log('110 Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
        this.coords = [];
        this.coords.push(geoposition.coords.latitude);
        this.coords.push(geoposition.coords.longitude);
        //this.map.setView(this.coords, 16);
        console.log('115 initMap');
        console.log(this.coords);
        // Ajout marqueur test
        //           
        this.initMap;
        console.log('115 coords watch' + this.coords);
        // tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

      } else {
        const positionError = (position as PositionError);
        console.log('Error ' + positionError.code + ': ' + positionError.message);
      }
    });
  }

  public setView(coords) {
    this.map.setView(coords, 18);
    console.log('setView');
  }

  public setEmplacement() {
    console.log('Centrage de la carte');
    // Test suppression emplacement à chaque raffraîchissement
    // this.emplacement.remove;
    this.initMap;
  }

  // Fonction de centrage de la carte suite double tap

  // public dblclick(coords){
  // this.map.setView(coords, 17);
  // }

  public initMap(coords) {
    // Instanciation de la carte
    // this.map = new Map('mapView');
    // Deuxième paramètre correspond au zoom
    this.map.setView(coords, 17);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);
    // console.log('this coords: '+ this.coords);
    console.log('158 coords ' + coords);

    // Ajout du marqueur de position à l'instanciation de la carte

    // circle(coords, { color: 'blue', radius: 10 }).addTo(this.map).bindPopup('<p>Vous êtes ici!</p>');

    // Ajout d'un marqueur test dans le jardin

    circle([50.704295, 3.252503], { color: 'blue', radius: 2 }).addTo(this.map).bindPopup('<p>Place PMR test!</p>');


    // Ajout sur la carte des emplacements PMR de l' API selectionnée

    console.log('Longueur tableau: ' + Object.keys(this.pmrList).length);

    let j = 0;
    // Affichage de test de la localisation du 1er emplacement de l' API
    // Ajouter l' URL de l' API concernée dans le log
    /////////////////////////////////////////////////////////////////////
    // Tester la mutualisation des API via l'entrée geometry/coordonates
    /////////////////////////////////////////////////////////////////////
    console.log('field 2d geo ' + this.pmrList[0].fields.geo_point_2d);
    while (j < Object.keys(this.pmrList).length) {
      // Ajout d'une condition pour s'adapter à l' API de Lambersart         
      if (this.pmrList[j].fields.geo_point_2d != undefined) {
        circle(this.pmrList[j].fields.geo_point_2d, { color: 'blue', radius: 5 }).addTo(this.map)
          .bindPopup('<p>Emplacement PMR</p>');
        j++;
      }
      // Ajout d'une condition sur l'occupation des places API Lambersart

      else if (this.pmrList[j].fields.adresse_gps) {

        console.log('Adresse: ' + this.pmrList[j].fields.adresse_postale);
        console.log('GPS: ' + this.pmrList[j].fields.adresse_gps);
        console.log('Occupation: ' + this.pmrList[j].fields.occupation_place);
        console.log('==================================')

        if (this.pmrList[j].fields.occupation_place === 'Libre') {
          circle(this.pmrList[j].fields.adresse_gps, { color: 'green', radius: 30 }).addTo(this.map);
          j++;
        }
        else if (this.pmrList[j].fields.occupation_place !== 'Libre') {
          circle(this.pmrList[j].fields.adresse_gps, { color: 'red', radius: 30 }).addTo(this.map);
          j++;

        }
        else  {
          
          j++;

        }

      }

      // Ajout condition pour API de la Metropole

      else if (this.pmrList[j].fields.geo){
        console.log('Metropole');
        console.log('Metropole Geo: ' + this.pmrList[j].fields.geo)
        circle(this.pmrList[j].fields.geo, { color: 'orange', radius: 30 }).addTo(this.map);
        
          j++;
      }

      j++;

    }

    // let subscription;
    this.subscription = this.geolocation.watchPosition();

    this.subscription.subscribe(position => {
      const geoposition = (position as Geoposition);
      if ((position as Geoposition).coords === undefined) {
        const GeolocationPositionError = (position as PositionError);
        console.log('Error ' + GeolocationPositionError.code + ': ' + GeolocationPositionError.message);
      } else {
        this.emplacement = circle(coords, { color: 'green', radius: 2 });
        // emplacement.remove();
        console.log('148 Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
        // let oldPosition = this.coords;
        console.log('150 geoposition : ' + geoposition);
        this.coords = [];
        this.coords.push(geoposition.coords.latitude);
        this.coords.push(geoposition.coords.longitude);
        coords = [];
        coords = this.coords;
        console.log('setView' + coords);
        // setTimeout(this.initMap, 5000);

        // Décommenter pour centrer la carte à chaque changement de position
        //  this.map.setView(coords, 17);  
        ondblclick = this.setView;
        console.log('195 coords watch' + this.coords + ' Date: ' + Date());
        // Ajout d'un marqueur sur la nouvelle position
        // circle(coords, { color: 'green', radius: 5 }).addTo(this.map);
        // emplacement.remove();
        // console.log('suppression emplacement');        
        this.emplacement.addTo(this.map);
        console.log('l182 ajout emplacement');
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);
        // circle(coords, { color: 'red', radius: 10 }).addTo(this.map); 
        // Test mise à jour avec timer 
        // Fonction de raffraîchissement du marqueur        
        console.log('Mise à jour de la position');
        setInterval(this.setEmplacement, 5000);
        this.initMap;
        console.log('l191 initMap' + coords);

      }

    });

  }

  // Désabonnement lors de la fermeture de l'application
  ngOnDestroy() {
    const temp = this;
    temp.subscription.unsubscribe;
  }

}


