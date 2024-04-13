import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-restaurants-list-page',
  templateUrl: './restaurants-list-page.component.html',
  styleUrl: './restaurants-list-page.component.css'
})
export class RestaurantsListPageComponent implements OnInit{
  restaurants: Restaurant[] = []; // Corrected variable name to restaurants
  constructor() {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.restaurants = fakeListings
  }
}
