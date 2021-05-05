import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RparmComponent } from './rparm.component';

describe('RparmComponent', () => {
  let component: RparmComponent;
  let fixture: ComponentFixture<RparmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RparmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RparmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
