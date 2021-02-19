import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './personne/personne.component';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';

const routes: Routes = [
  {path:'personnes-list', component:PersonnesListComponent},
  {path:'update/:id', component:UpdatePersonneComponent},
  {path:'view/:id', component:PersonneComponent},
  {path:'', component:PersonnesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
