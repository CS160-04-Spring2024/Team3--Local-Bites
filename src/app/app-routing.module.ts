import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DriverpageComponent} from './driverpage/driverpage.component';

const routes: Routes = [
  {path: '', component:DriverpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
