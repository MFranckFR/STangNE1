import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/app/service/personne.service';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {
  id!:number;
  personne:Personne = new Personne();
  // personne!:Personne;  # déclenche l'erreur TypeError: ctx.personne is undefined
  
  constructor(
    private personneService:PersonneService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personneService.getPersonne(this.id).subscribe(data=>{
      console.log('update', data);
      this.personne = new Personne();
      this.personne.loadData(data);
    });

  }

  updatePersonne(){
    this.personneService.updatePersonne(this.id, this.personne).subscribe(resp=>{
      console.log('updatePersonne2', resp)
    });
    this.router.navigateByUrl('personne/personnes-list');
  }

}
