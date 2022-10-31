import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './Components/acerca-de/acerca-de.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NuevaEducacionComponent } from './Components/educacion/nueva-educacion.component';
import { interceptorProvider } from './services/interceptor.service';
import { EditarEducacionComponent } from './Components/educacion/editar-educacion.component';
import { NuevoProyectoComponent } from './Components/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './Components/proyectos/editar-proyecto.component';
import { NuevaTechComponent } from './Components/technologies/nueva-tech.component';
import { EditarTechComponent } from './Components/technologies/editar-tech.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EducacionComponent,
    TechnologiesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    NuevaTechComponent,
    EditarTechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
