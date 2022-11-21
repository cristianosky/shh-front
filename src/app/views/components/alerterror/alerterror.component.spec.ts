import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerterrorComponent } from './alerterror.component';

describe('AlerterrorComponent', () => {
  let component: AlerterrorComponent;
  let fixture: ComponentFixture<AlerterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlerterrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlerterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
