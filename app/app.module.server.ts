import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { RestaurantsListPageComponent } from './restaurants-list-page/restaurants-list-page.component';
import { RestaurantProfilePageComponent } from './restaurant-profile-page/restaurant-profile-page.component';
import { NewrestaurantsMenuPageComponent } from './newrestaurants-menu-page/newrestaurants-menu-page.component';
import { EditrestaurantMenuPageComponent } from './editrestaurant-menu-page/editrestaurant-menu-page.component';
import { MyrestaurantsMenuPageComponent } from './myrestaurants-menu-page/myrestaurants-menu-page.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
