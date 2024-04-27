import { Component, OnInit} from '@angular/core';
import { DriverService } from '../services/driver/driver.service';

@Component({
  selector: 'app-driverpage',
  templateUrl: './driverpage.component.html',
  styleUrl: './driverpage.component.css'
})
export class DriverpageComponent implements OnInit{

  drivers:String[] = [];
  constructor(private driverService:DriverService) {
    
  
  }

  // adding driver property to driver component and fill it using getAll function inside ngOnInit
  ngOnInit(): void {
    this.drivers = this.driverService.getAll();
  }

}
