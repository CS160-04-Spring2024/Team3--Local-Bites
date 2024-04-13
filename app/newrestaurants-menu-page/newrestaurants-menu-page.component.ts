import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newrestaurants-menu-page',
  templateUrl: './newrestaurants-menu-page.component.html',
  styleUrls: ['./newrestaurants-menu-page.component.css'] // Fixed styleUrl to styleUrls
})
export class NewrestaurantsMenuPageComponent implements OnInit {
  name: string = '';
  description: string = ''; // Fixed typo in property name
  price: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
   // 
  }

  onSubmit() {
    // Handle form submission logic here
    alert('Creating a new menu...');
    this.router.navigateByUrl('/restaurant-menu');

  }
}
