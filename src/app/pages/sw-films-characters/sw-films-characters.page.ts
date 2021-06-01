import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { URL } from '../sw-films/sw-films.page';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sw-films-characters',
  templateUrl: './sw-films-characters.page.html',
  styleUrls: ['./sw-films-characters.page.scss'],
})
export class SwFilmsCharactersPage implements OnInit {

  public film = {title: null, characters: [], personnages: []
    };
  
  private UrlPersonnages: 'https://swapi.dev/api/people/';

    constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
    ngOnInit() {
      // Récupération de l'id du film passé en paramètre
      const id = this.route.snapshot.paramMap.get('id');
      this.loadFilm(id);
    }
  
    private loadFilm(id){
      const detailUrl = URL + id;
     
      this.http.get(detailUrl).subscribe((response: any) => {
        console.log(response);
        this.film = response;
         // Tableau des appels à l'API pour récupérer la liste des personnages
         const apiCalls = [];         
           apiCalls.push(this.http.get(URL));
         // Résolution en une fois de tous les appels à l'API
         // pour récupérer la liste des liens vers les personnages
         forkJoin(apiCalls).subscribe(
           (res: any[]) => {
             this.film.characters = res;                    
             }  
         );   

        // Tableau des appels à l'API pour récupérer la liste des personnages
         const apiCallsPersonnages = [];
         for (const url of this.film.characters) {
           apiCallsPersonnages.push(this.http.get(url));
           console.log(apiCallsPersonnages);
         }
         // Résolution en une fois de tous les appels à l'API
         // pour récupérer la liste des liens vers les personnages
         forkJoin(apiCallsPersonnages).subscribe(
           (resPersonnage: any[]) => {
             this.film.personnages = resPersonnage;    
             console.log(resPersonnage);                
             }  
          
         );   
           
      });
    
      

    }
  
    public getDate(date: string) {
      return new Date(date);
    }

    public getId(item){
      const urlParts = item.url.split('/');
      console.log(urlParts);
      return urlParts[urlParts.length - 2];
    }

}
