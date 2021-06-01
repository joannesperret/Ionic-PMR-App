import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { URL } from '../sw-planet/sw-planet.page';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sw-planet-details',
  templateUrl: './sw-planet-details.page.html',
  styleUrls: ['./sw-planet-details.page.scss'],
})
export class SwPlanetDetailsPage implements OnInit {

  public planet = {name: null, rotation_period: null, orbital_period: null, diameter: null, climate: null, films: [] ,gravity: null,
  terrain: null, surface_water: null, population: null, residents: []
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // Récupération de l'id du personnage passé en paramètre
    const id = this.route.snapshot.paramMap.get('id');
    this.loadCharacter(id);
  }

  private loadCharacter(id){
    const detailUrl = URL + id;
    this.http.get(detailUrl).subscribe((response: any) => {
      console.log(response);
      this.planet = response;
       // Tableau des appels à l'API pour récupérer la liste des films
       const apiCalls = [];
       for (const url of response.films) {
         apiCalls.push(this.http.get(url));
       }
       // Résolution en une fois de tous les appels à l'API
       // pour récupérer la liste des films
       forkJoin(apiCalls).subscribe(
         (res: any[]) => {
           this.planet.films = res;        }

       );
         // Tableau des appels à l'API pour récupérer la liste des personnages
       const apiCallsPersonnages = [];
       for (const url of response.residents) {
         apiCallsPersonnages.push(this.http.get(url));
       }
       // Résolution en une fois de tous les appels à l'API
       // pour récupérer la liste des personnages
       forkJoin(apiCallsPersonnages).subscribe(
         (resPersonnages: any[]) => {
           this.planet.residents = resPersonnages;        }

       );

         
    });
  }

  public getDate(date: string) {
    return new Date(date);
  }

}
