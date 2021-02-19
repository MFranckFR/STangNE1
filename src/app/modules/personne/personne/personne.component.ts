import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/app/service/personne.service';
import { Personne } from 'src/app/classes/personne';


@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  id!:number;
  personne:Personne = new Personne();
  
  constructor(private personneService:PersonneService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personneService.getPersonne(this.id).subscribe(data=>{
      console.log('personneUniq', data);
      this.personne = new Personne();
      this.personne.loadData(data);
    });
  }

}
