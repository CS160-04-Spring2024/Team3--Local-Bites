import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrestaurantsMenuPageComponent } from './myrestaurants-menu-page.component';

describe('MyrestaurantsMenuPageComponent', () => {
  let component: MyrestaurantsMenuPageComponent;
  let fixture: ComponentFixture<MyrestaurantsMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyrestaurantsMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyrestaurantsMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
