import { Component } from '@angular/core';
import { Personne } from './classes/personne';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angNE1 Mon appli';
  personne: Personne = new Personne(100, 'John', 'Doe');
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

  getColor(){
    //couleurs:string[] = Array('red', 'blue', 'yellow', 'green', 'orange', 'pink', 'darkblue');
    //couleurs[Math.floor(Math.random() * couleurs.length)];
    return 'green';
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
