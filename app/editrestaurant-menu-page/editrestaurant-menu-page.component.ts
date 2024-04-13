import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../types';
import { fakeMenuListings } from '../fake-data';

@Component({
  selector: 'app-editrestaurant-menu-page',
  templateUrl: './editrestaurant-menu-page.component.html',
  styleUrl: './editrestaurant-menu-page.component.css'
})
export class EditrestaurantMenuPageComponent implements OnInit{

  restaurant: Restaurant[] = [];  

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const foundRestaurant = fakeMenuListings.find(restaurant => restaurant.id === id);
    if (foundRestaurant) {
      this.restaurant.push(foundRestaurant); // Push the found restaurant into the array
    } else {
      console.error(`Restaurant with ID ${id} not found.`);
    }
  }
  
  onSubmit(): void{
    this.router.navigateByUrl('/restaurant-menu')
  }

}
