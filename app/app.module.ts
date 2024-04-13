import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestaurantsListPageComponent } from './restaurants-list-page/restaurants-list-page.component';
import { RestaurantProfilePageComponent } from './restaurant-profile-page/restaurant-profile-page.component';
import { MyrestaurantsMenuPageComponent } from './myrestaurants-menu-page/myrestaurants-menu-page.component';
import { NewrestaurantsMenuPageComponent } from './newrestaurants-menu-page/newrestaurants-menu-page.component';
import { EditrestaurantMenuPageComponent } from './editrestaurant-menu-page/editrestaurant-menu-page.component';
import { FormsModule } from '@angular/forms';
import { RestaurantDataFormComponent } from './restaurant-data-form/restaurant-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListPageComponent,
    RestaurantProfilePageComponent,
    MyrestaurantsMenuPageComponent,
    NewrestaurantsMenuPageComponent,
    EditrestaurantMenuPageComponent,
    RestaurantDataFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule here

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
