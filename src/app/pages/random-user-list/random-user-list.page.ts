import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// adresse de l' API à laquelle on veut se connecter
const URL ='https://randomuser.me/api/';


@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.page.html',
  styleUrls: ['./random-user-list.page.scss'],
})
export class RandomUserListPage implements OnInit {

  // injection d'une instance d' HttpClient dans le constructeur
  // stockée dans une variable nommée http

  public userList = [];
  public numberOfUserPerRequest = '10';
  public genderPerRequest = 'female';
  public natPerRequest = 'fr';
  // public dataGender ='man';


  constructor(private http: HttpClient){ }

  ngOnInit() {
    this.loadUsers(null);
  }

  

  public loadUsers(even){
    // Requête HTTP, la méthode get retourne un observable

    // passage de données en paramétrage

   const search = new HttpParams()
   .set('results', this.numberOfUserPerRequest)
   .set('gender', this.genderPerRequest)
   .set('nat', this.natPerRequest);
    // tslint:disable-next-line: align
  // .set('data-gender', this.dataGender);


   this.http.get(URL, {params: search})
    // l'observable est résolu par la méthode subscribe
    .subscribe(
      // fonction callback de succès
      (response: any) => {
      console.log(response);
      this.userList = this.userList.concat(response.results);
      console.log(this.userList);
      if (even){
        even.target.complete();
      }

    });
  }

}
