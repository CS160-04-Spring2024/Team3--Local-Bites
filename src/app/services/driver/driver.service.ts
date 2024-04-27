import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor() { }

  getAll():String[] {
    return [
      '/assets/images/DeliveryMan.jpeg',
      '/assets/images/DeliveryInterface.jpeg',
      '/assets/images/DeliveryDriver.jpeg'
      
    ]
  }
}
