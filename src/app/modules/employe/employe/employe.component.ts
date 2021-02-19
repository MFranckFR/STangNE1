import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/service/employe.service';
import { Employe } from 'src/app/classes/employe';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  id!:string;
  employe:Employe = new Employe();
  
  constructor(
    private employeService:EmployeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('id', this.id);

    this.employeService.getEmploye(this.id).subscribe(data=>{
      console.log('employeUniq', data);
      this.employe = new Employe();
      this.employe.loadData(data);
    });
    console.log('employe', this.employe);
  }

  updateEmploye(id:string){
    this.router.navigate(['employe/update', this.id]);
  }

}

