import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tech } from 'src/app/models/tech';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-editar-tech',
  templateUrl: './editar-tech.component.html',
  styleUrls: ['./editar-tech.component.scss']
})
export class EditarTechComponent implements OnInit {

  tech: Tech = new Tech("", "");

  constructor(
    private techS: TechnologiesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.techS.detail(id).subscribe({
      next: (data) => {
        this.tech = data;
      },
      error: (error) => {
        alert("Error");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.techS.update(id, this.tech).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log("error");
        this.router.navigate(['']);
      }
    });
  }

}
