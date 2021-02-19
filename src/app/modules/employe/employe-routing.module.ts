import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeUpdateComponent } from './employe-update/employe-update.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployesComponent } from './employes/employes.component';

const routes: Routes = [
  {path:'employes', component:EmployesComponent},
  {path:'update/:id', component:EmployeUpdateComponent},
  {path:'view/:id', component:EmployeComponent},
  {path:'', component:EmployesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
