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
  public pmrLocalisation = [];
  public souscription = this.geolocation.watchPosition();
  public subscription;
  public emplacement;
  
  // API paramétrée pour appel des 797 emplacements des emplacements PMR de Roubaix
  public UrlPmrRoubaix = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=les-emplacements-de-stationnement-pmr-a-roubaix&q=&rows=797';

  // API paramétrée pour appel des 1 575 emplacements PMR de Lille

  public UrlPmrLille = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=stationnements-reserves-a-lille&q=&rows=1574';

  public coords = [];

  constructor(public geolocation: Geolocation, public http: HttpClient) {
  }

  ngOnInit(): void {
    // Fonction d'appel de l' API de geolocalisation des emplacements PMR de Lille
    this.loadPmrPark(this.UrlPmrLille);
    // Fonction d'appel de l' API de geolocalisation des emplacements PMR de Roubaix
    // this.loadPmrPark(this.UrlPmrRoubaix);
    //.then( toast => toast.present());
    
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
          // console.log(response);
          this.pmrList = response.records;
          console.log("Promesse");
          // boucle d'ajout de cercle sur chaque coordonnée d'emplacement PMR 
          //this.initMap(position.coords);             
          for (let i = 0; i < 500; i++) {
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
          // test ajout timer sur initialisation carte
          //  var temp = this;          
          // var id = setTimeout(function(){
           // temp.initMap(temp.coords); 
          //    temp.initMap(temp.coords);
          //    console.log('timeOut');
          //    console.log('coords'+temp.coords)
          // }, 1000);
        // clearTimeout(id);
                    
         // setTimeout(this.test, 1000);
         this.initMap(this.coords);
        
        }); 
  }


  // public test(){
  //   setTimeout(this.test, 5000);
  //   console.log('test');
  // };

  public ionViewDidEnter() {
    // this.geolocation.getCurrentPosition()
    //   .then(response => {
    //     this.coords = [response.coords.latitude, response.coords.longitude];
    //     console.log('Position: ' + [response.coords.latitude, response.coords.longitude]);
    //   }).catch((error) => {
    //     console.log('Error getting location', error);
    //   });
    // const souscription = this.geolocation.watchPosition();
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
   
  public setView(coords){
    this.map.setView(coords, 18);
  }
  
  public setEmplacement(){    
    console.log('Centrage de la carte');
    // Test suppression emplacement à chaque raffraîchissement
    this.emplacement.remove;
    this.initMap;
  }

  public initMap(coords) {
    // Instanciation de la carte
    this.map = new Map('mapView');
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
       
    Object.keys(this.pmrList).length;
    console.log('Longueur tableau: '+ Object.keys(this.pmrList).length);

    let j = 0;
    while (j < Object.keys(this.pmrList).length) {
      circle(this.pmrList[j].fields.geo_point_2d, { color: 'blue', radius: 5 }).addTo(this.map)
        .bindPopup('<p>Emplacement PMR</p>'); 
        j++; 
    }

    // let subscription;
    this.subscription = this.geolocation.watchPosition();

    this.subscription.subscribe(position => {
      const geoposition = (position as Geoposition);
      if ((position as Geoposition).coords !== undefined) {
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
        this.map.setView(coords, 17);        
        console.log('195 coords watch' + this.coords + ' Date: '+ Date());
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
        // setInterval(this.initMap,20000)  
        console.log('Mise à jour de la position');
        setInterval(this.setEmplacement,5000); 
        // this.initMap;  
        console.log('l191 initMap' + coords);
        // Ajouter fonction de suppression de l'emplacement
        // Mise à jour de l'emplacement
        // Ajout de l'emplacement
            
      } else {
        const GeolocationPositionError = (position as PositionError);
        console.log('Error ' + GeolocationPositionError.code + ': ' + GeolocationPositionError.message);
      }
      
    });
    
  }

  // Désabonnement lors de la fermeture de l'application
  ngOnDestroy() {
    const temp = this;
    temp.subscription.unsubscribe;
   }
  
}

 
