import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsuccessComponent } from './alertsuccess.component';

describe('AlertsuccessComponent', () => {
  let component: AlertsuccessComponent;
  let fixture: ComponentFixture<AlertsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
