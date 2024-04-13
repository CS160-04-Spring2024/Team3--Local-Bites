import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsListPageComponent } from './restaurants-list-page/restaurants-list-page.component';
import { RestaurantProfilePageComponent } from './restaurant-profile-page/restaurant-profile-page.component';
import { NewrestaurantsMenuPageComponent } from './newrestaurants-menu-page/newrestaurants-menu-page.component';
import { MyrestaurantsMenuPageComponent } from './myrestaurants-menu-page/myrestaurants-menu-page.component';
import { EditrestaurantMenuPageComponent } from './editrestaurant-menu-page/editrestaurant-menu-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/restaurants', pathMatch: 'full'},
  {path: 'restaurants', component:RestaurantsListPageComponent, pathMatch:'full'},
  {path: 'restaurants/:id', component:RestaurantProfilePageComponent},
  {path: 'restaurant-menu', component:MyrestaurantsMenuPageComponent},
  
  {path: 'edit-menu/:id', component:EditrestaurantMenuPageComponent},
  {path: 'new-menu', component:NewrestaurantsMenuPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
