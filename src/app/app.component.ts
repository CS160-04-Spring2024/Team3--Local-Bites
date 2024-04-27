import { Component } from '@angular/core';
// import { Routes, RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./header/header.component";
// import { DriverpageComponent } from './driverpage/driverpage.component';
// const routes: Routes = [
//   {path:'', component:DriverpageComponent}
// ];


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
    // imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'localbites';
}

