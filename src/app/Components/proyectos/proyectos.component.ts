import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto'
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  active: string[] = [];
  data: Proyecto[] = [];

  activeDescription: string = "";
  isLogged = false;

  constructor(private sProyectos: ProyectosService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.callData();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  callData() {
    this.sProyectos.lista().subscribe(datos => { 
      this.data = datos;
      
      this.data.forEach((_, index)=>{
        if(index==0) {
          this.active.push("active");
          console.log("active funciona " + index);
          console.log(this.active);
        } else {
          this.active.push("");
          console.log("funciona " + index);
        }
      })
    });
    
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe({
        next: (data) => {
          this.callData();
        }, 
        error: (err) => {
          alert("Error");
        }
      })
    }
  }

}
