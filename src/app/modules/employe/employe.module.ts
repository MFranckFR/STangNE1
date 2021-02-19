import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployesComponent } from './employes/employes.component';
import { FormsModule } from '@angular/forms';
import { EmployeUpdateComponent } from './employe-update/employe-update.component';

@NgModule({
  declarations: [EmployesComponent, EmployeUpdateComponent],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    FormsModule
  ]
})
export class EmployeModule { }
