import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// adresse de l' API à laquelle on veut se connecter
export const URL ='https://swapi.dev/api/people/';

@Component({
  selector: 'app-sw-personnages',
  templateUrl: './sw-personnages.page.html',
  styleUrls: ['./sw-personnages.page.scss'],
})
export class SwPersonnagesPage implements OnInit {  

   // injection d'une instance d' HttpClient dans le constructeur
  // stockée dans une variable nommée http

  public userList = [];
  public numberOfUserPerRequest = '20';
  public nextUrl: string;
  public prevUrl: string;
  public page = 1;
  // public genderPerRequest = 'female';
  // public natPerRequest = 'fr';
  // public dataGender ='man';


  constructor(private http: HttpClient){ }

  ngOnInit() {
    this.loadUsers(URL);
  }

  

  public loadUsers(dataUrl){
    // Requête HTTP, la méthode get retourne un observable

    // passage de données en paramétrage

  // const search = new HttpParams()
 //  .set('results', this.numberOfUserPerRequest);
   //.set('gender', this.genderPerRequest)
  // .set('nat', this.natPerRequest);
    // tslint:disable-next-line: align
  // .set('data-gender', this.dataGender);


   this.http.get(dataUrl)
    // l'observable est résolu par la méthode subscribe
    .subscribe(
      // fonction callback de succès
      (response: any) => {
      console.log(response);
      this.userList = response.results;
      this.nextUrl = response.next;
      this.prevUrl = response.previous;
      console.log(this.userList);
    });
  }

  public nextPage(){
    this.loadUsers(this.nextUrl);
    console.log(this.nextUrl);
    this.page++;
  }

  public prevPage(){
    this.loadUsers(this.prevUrl);
    console.log(this.prevUrl);
    this.page--;
  }

  public getId(item){
    const urlParts = item.url.split('/');
    console.log(urlParts);
    return urlParts[urlParts.length - 2];
  }

}
