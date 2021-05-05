import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivatesComponent } from './deactivates.component';

describe('DeactivatesComponent', () => {
  let component: DeactivatesComponent;
  let fixture: ComponentFixture<DeactivatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
