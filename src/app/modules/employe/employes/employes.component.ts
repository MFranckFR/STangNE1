import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/classes/employe';
import { EmployeService } from 'src/app/service/employe.service';


@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employe:Employe = new Employe();
  employes:Array<Employe> = []; /// new Array<Employe>();


  constructor(
    private employeService:EmployeService,
    private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.employeService.getAllEmployes().subscribe(resp=>{
      this.employes = resp;
      console.log('reloadEmp:', this.employes[0].id);
    });
  }

  saveEmploye(){
    // employe:Employe = new Employe(this.employe.firstName, this.employe.lastName);
    //const employe = new Employe(this.employe.id, this.employe.firstName, this.employe.lastName);
    const employe = new Employe();
    employe.loadData(this.employe);
    this.employeService.addEmploye(employe).subscribe(resp=>{
      console.log('saveEmploye', resp);
      this.reloadData();
    });
  }

  deleteEmploye(id: string){
    this.employeService.deleteEmploye(id).subscribe(
      data=>{
        console.log('deleteEmploye', data);
        this.reloadData();
      }
    );
  }

  updateEmploye(id:string){
    this.router.navigate(['employe/update', id]);
  }


}
