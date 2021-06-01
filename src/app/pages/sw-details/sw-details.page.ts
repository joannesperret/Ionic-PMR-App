import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URL } from '../sw-personnages/sw-personnages.page';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-sw-details',
  templateUrl: './sw-details.page.html',
  styleUrls: ['./sw-details.page.scss'],
})

export class SwDetailsPage implements OnInit {

  public character = {name: null, mass: null, height: null, eye_color: null, hair_color: null, films: [] ,planete: null
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
      this.character = response;
       // Tableau des appels à l'API pour récupérer la liste des films
       const apiCalls = [];
       for (const url of response.films) {
         apiCalls.push(this.http.get(url));
       }
       // Résolution en une fois de tous les appels à l'API
       // pour récupérer la liste des films
       forkJoin(apiCalls).subscribe(
         (res: any[]) => {
           this.character.films = res;        }


       );
         // Appel à l'API pour récupérer le lien de la planète         
         const urlPlanet = response.homeworld;   
         // Création de la variable planet      
         const planet = this.http.get(urlPlanet).subscribe((planetResponse: any) =>{
         // et affectation à l'objet du personnage
           this.character.planete = planetResponse.name;         
         }
         );

         
    });
  }

  public getDate(date: string) {
    return new Date(date);
  }

}
