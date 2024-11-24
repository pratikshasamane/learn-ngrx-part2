import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomincrementComponent } from './customincrement.component';

describe('CustomincrementComponent', () => {
  let component: CustomincrementComponent;
  let fixture: ComponentFixture<CustomincrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomincrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomincrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
