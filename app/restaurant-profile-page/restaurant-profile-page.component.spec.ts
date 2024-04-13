import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantProfilePageComponent } from './restaurant-profile-page.component';

describe('RestaurantProfilePageComponent', () => {
  let component: RestaurantProfilePageComponent;
  let fixture: ComponentFixture<RestaurantProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
