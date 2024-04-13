import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../types';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-restaurant-data-form',
  templateUrl: './restaurant-data-form.component.html',
  styleUrl: './restaurant-data-form.component.css'
})
export class RestaurantDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentStars = '';  // fake data shows stars but i am using price here

  name: string = '';
  description: string = ''; 
  stars: string = '';

  @Output() onSubmit = new EventEmitter<Restaurant>();

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
   // 
   this.name = this.currentName;
   this.description = this.currentDescription;
   this.stars = this.currentStars
  }

  onButtonClicked() {
    // Handle form submission logic here
   // alert('Creating a new menu...');
   this.onSubmit.emit({
    id: '', // Initialize id with an empty string or appropriate value
    name: this.name,
    description: this.description,
    stars: Number(this.stars),
   });
  }
}

