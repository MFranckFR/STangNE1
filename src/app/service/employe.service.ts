import { Injectable } from '@angular/core';
import { Employe } from '../classes/employe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  url:string = "http://localhost:8080/";
  url_employe:string = this.url + 'employe/';
  url_employes:string = this.url + 'employes/';

  employes:Array<Employe> = new Array<Employe>();

  // constructor(private http:HttpClient) {
  constructor(private http:HttpClient) {
  }


  getAllEmployes(){
    return this.http.get<Array<Employe>>(this.url_employes);
  }

  addEmploye(p:Employe){
    // this.employes.push(p);
    console.log('service-addEmploye', p);
    const _p = {name:p.name, surname:p.surname, age:p.age, address:p.address}; 
    // mapping nécessaire car un json {_clé:valeur, } n'est pas accessible
    return this.http.post(this.url_employe, _p);
  }

  deleteEmploye(id: string){
    return this.http.delete(this.url_employe + id);
  }

  getEmploye(id: string){
    return this.http.get(this.url_employe + id);
  }

  updateEmploye(id:string, p:Employe){
    const _p = {
      _id:id, 
      name:p.name, 
      surname:p.surname, 
      age:p.age, 
      address:p.address
    }; 
    return this.http.put(this.url_employe, _p);
  }
}
