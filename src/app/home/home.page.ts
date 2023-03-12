import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private router: Router) {}

    ngOnInit(): void {}

    pointOfSale(): void {
        this.router.navigate(['poit-of-sale']);
    }

    sale(): void {
        this.router.navigate(['sale']);
    }

    inventory(): void {
        this.router.navigate(['inventory']);
    }

    purchase(): void {
        this.router.navigate(['purchase']);
    }

}
