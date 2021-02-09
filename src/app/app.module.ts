import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './composants/calculator/calculator.component';
import { FormComponent } from './composants/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StagiaireComponent,
    AdresseComponent,
    ErrorComponent,
    TemplateformComponent,
    CalculatorComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
