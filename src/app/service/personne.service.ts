import { Injectable } from '@angular/core';
import { Personne } from '../classes/personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  url:string = "http://localhost:5555/personnes/";

  personnes:Array<Personne> = new Array<Personne>();

  // constructor(private http:HttpClient) {
  constructor(private http:HttpClient) {
    // const personnes:Array<Personne> = [
    //    new Personne(100, 'John', 'Doe'),
    //   new Personne(200, 'John', 'John'),
    //   new Personne(300, 'John', 'Kennedy'),
    //   new Personne(400, 'John', 'Wayne')
    // ];
    // personnes.map(p=>this.addPerson(p));
    // this.push({100, 'John', 'Doe'}) fonctionne aussi même si c'est pas du type personne !
   }

  // getAll() {
  //    return this.personnes;
  // }

  getAllPersonnes(){
    return this.http.get<Array<Personne>>(this.url);
  }

  addPersonne(p:Personne){
    // this.personnes.push(p);
    console.log('service-addPersonne', p);
    const _p = {id:p.id, firstName:p.firstName, lastName:p.lastName}; 
    // mapping nécessaire car un json {_clé:valeur, } n'est pas accessible
    return this.http.post(this.url, _p);
  }

  deletePersonne(id: number){
    return this.http.delete(this.url + id);
  }

  getPersonne(id: number){
    return this.http.get(this.url + id);
  }

  updatePersonne(id:number, p:Personne){
    const _p = {id:id, firstName:p.firstName, lastName:p.lastName}; 
    return this.http.put(this.url + id, _p);
  }
}
