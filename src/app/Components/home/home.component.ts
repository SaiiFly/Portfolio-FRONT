import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  scrollFunction() {
    animateScrollTo(document.getElementById('target')!);
  }

}
