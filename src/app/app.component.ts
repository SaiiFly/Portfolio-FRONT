import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import animateScrollTo from 'animated-scroll-to';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  scrollFunction() {
    animateScrollTo(document.getElementById('target')!);
  }
}
