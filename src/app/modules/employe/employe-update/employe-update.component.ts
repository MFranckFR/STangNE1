import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/classes/employe';
import { EmployeService } from 'src/app/service/employe.service';


@Component({
  selector: 'app-employe-update',
  templateUrl: './employe-update.component.html',
  styleUrls: ['./employe-update.component.css']
})
export class EmployeUpdateComponent implements OnInit {

  id!:string;
  employe!:Employe;

  constructor(
    private employeService:EmployeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeService.getEmploye(this.id).subscribe(data=>{
      console.log('update', data);
      this.employe = new Employe();
      this.employe.loadData(data);
    });
  }


  updateEmploye(){
    this.employeService.updateEmploye(this.id, this.employe).subscribe(resp=>{
      console.log('updateEmploye2', resp)
    });
    this.router.navigateByUrl('employe/employes');
  }
}
