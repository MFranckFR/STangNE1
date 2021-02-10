import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StagiaireComponent} from './composants/stagiaire/stagiaire.component';
import {AdresseComponent} from './composants/adresse/adresse.component';
import {HomeComponent} from './composants/home/home.component';
import {ErrorComponent} from './composants/error/error.component';
import {TemplateformComponent} from './composants/templateform/templateform.component';
import { CalculatorComponent } from './composants/calculator/calculator.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { TpformComponent } from './composants/tpform/tpform.component';

const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'stagiaire', component: StagiaireComponent},
  {path:'stagiaire/:firstname/:lastname', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent},
  {path:'template-form', component:TemplateformComponent},
  {path:'error', component: ErrorComponent},
  {path:'calculator', component: CalculatorComponent},
  {path:'tpform', component: TpformComponent},
  {path:'reactive-form', component: ReactiveFormComponent},
  {path:'', redirectTo:'/home',  pathMatch:'full'},
  {path:'**', redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
