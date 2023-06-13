import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'pt-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  title!: string;

  titles = [
    'Pixel worker',
    'Digital consultant',
    'Frontend designer',
    'Interface developer',
    'Web craftsman',
    'UI architect',
  ];

  constructor(private router: Router) {}

  private getRandomTitle(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.titles[this.getRandomTitle(0, this.titles.length)];
      }
    });
  }
}
