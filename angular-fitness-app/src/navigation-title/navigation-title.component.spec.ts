import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTitleComponent } from './navigation-title.component';

describe('NavigationTitleComponent', () => {
  let component: NavigationTitleComponent;
  let fixture: ComponentFixture<NavigationTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
