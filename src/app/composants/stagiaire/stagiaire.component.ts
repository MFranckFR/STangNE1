import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Personne } from '../../classes/personne';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  firstname: any;
  lastname: any;

  // le constructeur ne sert qu'à faire des injectiosn de dépendances
  constructor(private route: ActivatedRoute) { 
    
  }

  // executer des la fin d'initialisation du composant.
  ngOnInit(): void {

    // observable: préférer lorsque les parametres
    // risque de changer souvent comme avec un ID
    //
    // via observables paramMap
    this.route.paramMap.subscribe(resp=>{
      this.firstname = resp.get('firstname');
      this.lastname = resp.get('lastname');
      console.log(`via subscribeParamMap - Prénom:${this.firstname} - Nom:${this.lastname}`);
    });

    // via observables queryParamMap
    this.route.queryParamMap.subscribe(resp=>{
      if (this.firstname === null){
        this.firstname = resp.get('firstname');
        this.lastname = resp.get('lastname');
        console.log(`via subscribeQueryParamMap - Prénom:${this.firstname} - Nom:${this.lastname}`);  
      }
    });

    // //via /stagiaire/john/doe
    // this.firstname = this.route.snapshot.params.firstname;
    // this.lastname = this.route.snapshot.params.lastname;
    // console.log(`via params - Prénom:${this.firstname} - Nom:${this.lastname}`);

    // // via /stagiaire?firstname=John&lastname=doe
    // this.firstname = this.route.snapshot.queryParams.firstname;
    // this.lastname = this.route.snapshot.queryParams.lastname;
    // console.log(`via queryParams: Prénom:${this.firstname} - Nom:${this.lastname}`);
  }
  // récuperation des parametres url sous forme
  // stagiaire/john/doe
  // paramMap

  // stagiaire?firstname=john&lastname=doe
  // queryParamMap

  // récupérer des parametres par l'intermédiaire d'un objet paramMap
  // solution avec ces observables(asynchrone)


}
