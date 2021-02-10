import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tpform',
  templateUrl: './tpform.component.html',
  styleUrls: ['./tpform.component.css']
})
export class TpformComponent implements OnInit {

 // nom = new FormControl('John Doe');

 personnes:any = [];

  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    prenom: ['', [Validators.required, this.checkFirstChar]],
    nom: ['', [Validators.required, this.checkFirstChar]],
    adresse: this.fb.group({
      rue:['', [Validators.required, this.checkNotEmpty]],
      ville:['', [Validators.required, this.checkVille]],
      codepostal:['', [Validators.required, this.checkZipCode]]
    }),
    // commentaire: this.fb.group({
    //   commentTitre:['', [Validators.required, this.checkNotEmpty]],
    //   categorie:[0], // select default
    //   commentTxt:['', [Validators.required, this.checkNotEmpty]]
    // }),
    commentaires: this.fb.array([])
  });
  


  nouveauCommentaire(): FormGroup {
    return this.fb.group({
      commentTitre: ['', [Validators.required, this.checkNotEmpty]],
      categorie: [0, [Validators.required]],
      commentTxt:['', [Validators.required, this.checkNotEmpty]]
    });
 }
  ajouterCommentaire(){
    this.commentaires.push(this.nouveauCommentaire());
    return false;
  }

  supprimerCommentaire(i:number){
    this.commentaires.removeAt(i);
  }

  categories:Array<string> = [
    'actualité',
    'politique', 
    'international', 
    'people', 
    'sport', 
    'culture', 
    'sciences', 
    'divers'];

  get id(){
    return this.personneForm.get('id');
  }
  get prenom(){
    return this.personneForm.get('prenom');
  }

  get nom(){
    return this.personneForm.get('nom');
  }

  get commentaires(){
    return  this.personneForm.get('commentaires') as FormArray;
  }
  // get sports(){
  //   return this.personneForm.get('sports') as FormArray;
  // }

  checkCategorie(control:FormControl){
    console.log('categorie', typeof control.value, control.value);
    if (control.value === '') return {erreur:"Selectionnez une categorie"}; 
    return control.value < this.categories.length ? null : {erreur:"Categorie inexistante"} ;
  }

  checkFirstChar(control:FormControl){
    const str:string = control.value;
    return str.match(/^[A-Z]/) ? null: {erreur: "Doit commencer par une majuscule"};
  }
  checkStreet(control:FormControl){
    const str:string = control.value;
    return str.length > 2 ? null : {erreur: "La rue doit faire plus de 5 caractères"};
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
    if (control.value === null || control.value.trim() === ''){
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
