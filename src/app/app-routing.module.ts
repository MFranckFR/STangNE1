import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StagiaireComponent} from './composants/stagiaire/stagiaire.component';
import {AdresseComponent} from './composants/adresse/adresse.component';
import {HomeComponent} from './composants/home/home.component';
import {ErrorComponent} from './composants/error/error.component';
import {TemplateformComponent} from './composants/templateform/templateform.component';

const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'stagiaire', component: StagiaireComponent},
  {path:'stagiaire/:firstname/:lastname', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent},
  {path:'template-form', component:TemplateformComponent},
  {path:'error', component: ErrorComponent},
  {path:'', redirectTo:'/home',  pathMatch:'full'},
  {path:'**', redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
