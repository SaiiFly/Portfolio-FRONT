import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './Components/acerca-de/acerca-de.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EducacionComponent,
    TechnologiesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
