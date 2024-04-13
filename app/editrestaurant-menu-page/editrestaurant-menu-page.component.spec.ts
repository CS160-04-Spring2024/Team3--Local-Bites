import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrestaurantMenuPageComponent } from './editrestaurant-menu-page.component';

describe('EditrestaurantMenuPageComponent', () => {
  let component: EditrestaurantMenuPageComponent;
  let fixture: ComponentFixture<EditrestaurantMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditrestaurantMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditrestaurantMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
