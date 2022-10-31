import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tech } from 'src/app/models/tech';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-nueva-tech',
  templateUrl: './nueva-tech.component.html',
  styleUrls: ['./nueva-tech.component.scss']
})
export class NuevaTechComponent implements OnInit {

  nombre: string = "";
  imgLink: string = "";

  constructor(private techS: TechnologiesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    const tech = new Tech(this.nombre, this.imgLink);
    this.techS.save(tech).subscribe({
      next: (data) => {
        alert("Tecnología agregada");
        this.router.navigate(['']);
      },
      error: (error) => {
        alert("error");
        this.router.navigate(['']);
      }
    });
  }

}
