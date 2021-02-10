import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 // nom = new FormControl('John Doe');

 personnes:any = [];

  // personneForm = new FormGroup({
  //   id: new FormControl('', [Validators.required, this.checkNumberValidator]),
  //   prenom: new FormControl('', [Validators.required, this.checkFirstChar]),
  //   nom: new FormControl('', [Validators.required, this.checkFirstChar]),
  //   adresse: new FormGroup({
  //     rue:new FormControl(''),
  //     ville:new FormControl(''),
  //     codepostal:new FormControl(''),
  //   })
  // });
  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    prenom: ['', [Validators.required, this.checkFirstChar]],
    nom: ['', [Validators.required, this.checkFirstChar]],
    adresse: this.fb.group({
      rue:['', [Validators.required, this.checkNotEmpty]],
      ville:['', [Validators.required, this.checkVille]],
      codepostal:['', [Validators.required, this.checkZipCode]]
    }),
    
    sports: this.fb.array([ ]) // this.fb.control('')
  });

  get id(){
    return this.personneForm.get('id');
  }
  get prenom(){
    return this.personneForm.get('prenom');
  }

  get nom(){
    return this.personneForm.get('nom');
  }

  get sports(){
    return this.personneForm.get('sports') as FormArray;
  }
  ajouterSport(){
    this.sports.push(this.fb.control(''));
    return false;
  }

  supprimerSport(i:number){
    this.sports.removeAt(i);
  }


  checkFirstChar(control:FormControl){
    const str:string = control.value;
    return str.match(/^[A-Z]/) ? null: {erreur: "Doit commencer par une majuscule"};
  }
  checkStreet(control:FormControl){
    const str:string = control.value;
    return str.length > 5 ? null : {erreur: "La rue doit faire plus de 5 caractères"};
  }
  checkVille(control:FormControl){
    const str:string = control.value;
    return str.length > 2 ? null : {erreur: "Doit faire plus de 3 caractères"};
  }

  checkZipCode(control:FormControl){
    const str:string = control.value;
    return str.match(/^[0-9][0-9]{3,6}/) ? null : {erreur:"Le CP comporte 5 chiffres"};
  }

  checkNotEmpty(control:FormControl){
    if (control.value === null || control.value === ''){
      return {erreur: "Pas de texte vide"};
    } else {
      return null;
    }

  }

  checkNumberValidator(control:FormControl){
    return Number.isInteger(control.value) ? null : {erreur:'Doit être un entier'};
  }

  afficherTout(){
    this.personnes.push({...this.personneForm.value})
    console.log(this.personneForm.value);
    // console.log(this.personneForm.controls.nom);
    // this.personneForm.reset();
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.personneForm.setValue({id:1, prenom:'John', nom:'Doe'});

    this.personneForm.patchValue({
      id:2,
      prenom:'John',
      nom:'Wick',
      adresse:{
        rue:'1 rue de la paix',
        ville:'Paris',
        codepostal:'75016'
      }
    });
  }

}
