import { Component, OnInit } from '@angular/core';
// import { Personne } from '../../interfaces/personne';
import { Personne } from '../../classes/personne';


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  personnes: Array<Personne> = [];
  personne: Personne = new Personne();

  nom2:string = '';

  result:string = '';

  ngOnInit(): void {

  }

  salut(value:string) {
    this.result =  value;
  }

  ajouterPersonne(){
    console.log(this.personne);
    this.personnes.push(this.personne)
    this.personne = new Personne();
  }

  supprimerPersonne(personne:Personne){
    const index = this.personnes.indexOf(personne);
    if(index >= 0 && index < this.personnes.length ){
      this.personnes.splice(index, 1);
    }
  }

}
