import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsShortenComponent } from './settings-shorten.component';

describe('SettingsShortenComponent', () => {
  let component: SettingsShortenComponent;
  let fixture: ComponentFixture<SettingsShortenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsShortenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsShortenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
