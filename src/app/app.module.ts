import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';
import { CalculatorComponent } from './composants/calculator/calculator.component';
import { FormComponent } from './composants/form/form.component';
import { TpformComponent } from './composants/tpform/tpform.component';
import { Tp2formComponent } from './composants/tp2form/tp2form.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon'; 

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragdropComponent } from './composants/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { PersonneModule } from './modules/personne/personne.module';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePersonneComponent } from './modules/personne/update-personne/update-personne.component';
import { PersonneComponent } from './modules/personne/personne/personne.component';
import { EmployeModule } from './modules/employe/employe.module';
import { EmployeComponent } from './modules/employe/employe/employe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StagiaireComponent,
    AdresseComponent,
    ErrorComponent,
    TemplateformComponent,
    CalculatorComponent,
    FormComponent,
    ReactiveFormComponent,
    TpformComponent,
    Tp2formComponent,
    DragdropComponent,
    UpdatePersonneComponent,
    PersonneComponent,
    EmployeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,

    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    DragDropModule,
    HttpClientModule,
    VehiculeModule,
    PersonneModule,
    EmployeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
