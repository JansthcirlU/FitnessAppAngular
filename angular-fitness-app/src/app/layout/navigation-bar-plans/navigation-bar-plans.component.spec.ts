import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarPlansComponent } from './navigation-bar-plans.component';

describe('NavigationBarPlansComponent', () => {
  let component: NavigationBarPlansComponent;
  let fixture: ComponentFixture<NavigationBarPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBarPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
