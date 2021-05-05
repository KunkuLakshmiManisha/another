import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPerameterComponent } from './routing-perameter.component';

describe('RoutingPerameterComponent', () => {
  let component: RoutingPerameterComponent;
  let fixture: ComponentFixture<RoutingPerameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingPerameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPerameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
