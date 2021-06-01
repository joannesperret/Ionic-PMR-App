import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// adresse de l' API à laquelle on veut se connecter
export const URL ='https://swapi.dev/api/films/';

@Component({
  selector: 'app-sw-films',
  templateUrl: './sw-films.page.html',
  styleUrls: ['./sw-films.page.scss'],
})
export class SwFilmsPage implements OnInit {

  // injection d'une instance d' HttpClient dans le constructeur
  // stockée dans une variable nommée http

  public filmList = [];
  //public numberOfPlanetPerRequest = '20';
  public nextUrl: string;
  public prevUrl: string;
  public page = 1;
  
  constructor(private http: HttpClient){ }

  ngOnInit() {
    this.loadFilm(URL);
  }  

  public loadFilm(dataUrl){
    // Requête HTTP, la méthode get retourne un observable

   this.http.get(dataUrl)
    // l'observable est résolu par la méthode subscribe
    .subscribe(
      // fonction callback de succès
      (response: any) => {
      console.log(response);
      this.filmList = response.results;
      this.nextUrl = response.next;
      this.prevUrl = response.previous;
      console.log(this.filmList);
    });
  }

  public nextPage(){
    this.loadFilm(this.nextUrl);
    console.log(this.nextUrl);
    this.page++;
  }

  public prevPage(){
    this.loadFilm(this.prevUrl);
    console.log(this.prevUrl);
    this.page--;
  }

  public getId(item){
    const urlParts = item.url.split('/');
    console.log(urlParts);
    return urlParts[urlParts.length - 2];
  }

}
