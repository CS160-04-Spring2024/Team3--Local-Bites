import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Restaurant } from '../types';



@Component({
  selector: 'app-restaurant-profile-page',
  templateUrl: './restaurant-profile-page.component.html',
  styleUrl: './restaurant-profile-page.component.css'
})
export class RestaurantProfilePageComponent implements OnInit {
  restaurant: Restaurant[] = []; // Ensure it's always initialized as an array
  restaurants: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const foundRestaurant = fakeListings.filter(restaurant => restaurant.id === id);
    if (foundRestaurant.length > 0) {
      this.restaurant = foundRestaurant;
    } else {
      // Handle case where no restaurant is found
      console.error('No restaurant found with id:', id);
    }
  }
}
