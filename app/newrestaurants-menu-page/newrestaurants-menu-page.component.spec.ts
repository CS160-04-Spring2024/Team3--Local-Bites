import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrestaurantsMenuPageComponent } from './newrestaurants-menu-page.component';

describe('NewrestaurantsMenuPageComponent', () => {
  let component: NewrestaurantsMenuPageComponent;
  let fixture: ComponentFixture<NewrestaurantsMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewrestaurantsMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewrestaurantsMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
