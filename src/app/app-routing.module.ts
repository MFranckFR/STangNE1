import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StagiaireComponent} from './composants/stagiaire/stagiaire.component';
import {AdresseComponent} from './composants/adresse/adresse.component';
import {HomeComponent} from './composants/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',  pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'stagiare', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
