import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
import { FormsModule } from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [PersonnesListComponent],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    FormsModule
   // HttpClientModule
  ]
})
export class PersonneModule { }
