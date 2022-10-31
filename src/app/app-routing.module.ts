import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './Components/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './Components/educacion/nueva-educacion.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { EditarProyectoComponent } from './Components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './Components/proyectos/nuevo-proyecto.component';
import { EditarTechComponent } from './Components/technologies/editar-tech.component';
import { NuevaTechComponent } from './Components/technologies/nueva-tech.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agregartecnologia', component: NuevaTechComponent},
  { path: 'editartecnologia/:id', component: EditarTechComponent},
  { path: 'agregareducacion', component: NuevaEducacionComponent},
  { path: 'editareducacion/:id', component: EditarEducacionComponent},
  { path: 'agregarproyecto', component: NuevoProyectoComponent},
  { path: 'editarproyecto/:id', component: EditarProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
