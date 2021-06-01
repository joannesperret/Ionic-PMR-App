import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { URL } from '../sw-ship/sw-ship.page';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sw-ship-details',
  templateUrl: './sw-ship-details.page.html',
  styleUrls: ['./sw-ship-details.page.scss'],
})
export class SwShipDetailsPage implements OnInit {

  public ship = {name: null, model: null, manufacturer: null, cost_in_credits: null, length: null, films: [] ,max_atmosphering_speed: null,
    crew: null, passengers: null, cargo_capacity: null, pilots: [], consumables: null, hyperdrive_rating: null,
    starship_class: null
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
        this.ship = response;
         // Tableau des appels à l'API pour récupérer la liste des films
         const apiCalls = [];
         for (const url of response.films) {
           apiCalls.push(this.http.get(url));
         }
         // Résolution en une fois de tous les appels à l'API
         // pour récupérer la liste des films
         forkJoin(apiCalls).subscribe(
           (res: any[]) => {
             this.ship.films = res;        }
  
         );
           // Tableau des appels à l'API pour récupérer la liste des pilotes
         const apiCallsPilotes = [];
         for (const url of response.pilots) {
           apiCallsPilotes.push(this.http.get(url));
         }
         // Résolution en une fois de tous les appels à l'API
         // pour récupérer la liste des pilotes
         forkJoin(apiCallsPilotes).subscribe(
           (resPilotes: any[]) => {
             this.ship.pilots = resPilotes;        }
  
         );
  
           
      });
    }
  
    public getDate(date: string) {
      return new Date(date);
    }
  

}
