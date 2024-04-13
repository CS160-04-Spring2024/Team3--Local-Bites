import { Component, OnInit } from '@angular/core';
import { fakeMenuListings } from '../fake-data';
import { Restaurant } from '../types';

@Component({
  selector: 'app-myrestaurants-menu-page',
  templateUrl: './myrestaurants-menu-page.component.html',
  styleUrl: './myrestaurants-menu-page.component.css'
})
export class MyrestaurantsMenuPageComponent implements OnInit{

  restaurants: Restaurant[] = [];  
  constructor() {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.restaurants = fakeMenuListings
  }

  onDeleteClicked(restaurantsId: String): void {
    alert('Deleting ...')
  }

}
