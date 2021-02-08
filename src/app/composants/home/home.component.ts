import { Component, OnInit } from '@angular/core';
import { Personne } from '../../classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    title = 'angNE1 Mon appli';
    personne: Personne = new Personne(100, 'John', 'Doe');
    // personnes = Array<Personne> = [.....]
    personnes: Personne[] = [
      new Personne(100, 'John', 'Doe'), 
      new Personne(200, 'John', 'John'),
      new Personne(300, 'John', 'Kennedy'),
      new Personne(400, 'John', 'Wayne'),
    ];
    tab: number[] = Array.from([1,2,3,4,5,6,7,8], x=>Math.floor(Math.random()*21));
    libelleFormation = "POEC Font-EndS";
    couleur = "blue";
    nom = this.getRandomPersonne().name;

    getRandomColor(){
      let couleurs:string[] = Array('red', 'blue', 'yellow', 'green', 'orange', 'pink', 'darkblue');
      return couleurs[Math.floor(Math.random() * couleurs.length)];
    }

    getBackgroundColor(){ 
      return 'lightblue';
    }

    direBonjour(){
      return 'Bonjour';
    }

    getRandomPersonne(){
      return this.personnes[Math.floor(Math.random() * this.personnes.length)];
    }

}
