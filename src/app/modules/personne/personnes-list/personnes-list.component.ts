import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/classes/personne';
import { PersonneService } from 'src/app/service/personne.service';


@Component({
  selector: 'app-personnes-list',
  templateUrl: './personnes-list.component.html',
  styleUrls: ['./personnes-list.component.css']
})
export class PersonnesListComponent implements OnInit {

  personne:Personne = new Personne();
  personnes:Array<Personne> = new Array<Personne>();

  constructor(private personneService:PersonneService,
    private router:Router) { }

  ngOnInit(): void {
    // this.personnes = this.personneService.getAll();
    this.reloadData();
  }

  // Chargement via observateur/
  reloadData(){
    // this.personneService.getAllPersonnes().subscribe(resp=>this.personnes = resp);
    // this.personnes = [];
    // this.personneService.getAllPersonnes().subscribe(resp=>{
    //   resp.map(elt=>{
    //     this.personnes.push(new Personne(elt.id, elt.firstName, elt.lastName));
    //   })
    // });
    this.personneService.getAllPersonnes().subscribe(resp=>this.personnes = resp);
  }

  savePersonne(){
    // personne:Personne = new Personne(this.personne.firstName, this.personne.lastName);
    //const personne = new Personne(this.personne.id, this.personne.firstName, this.personne.lastName);
    const personne = new Personne();
    personne.loadData(this.personne);
    this.personneService.addPersonne(personne).subscribe(resp=>{
      console.log('savePersonne', resp);
      this.reloadData();
    });
  }

  deletePersonne(id: number){
    this.personneService.deletePersonne(id).subscribe(
      data=>{
        console.log('deletePersonne', data);
        this.reloadData();
      }
    );
  }

  updatePersonne(id:number){
    this.router.navigate(['personne/update', id]);
  }

}
