import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPhysicalComponent } from './consult-physical.component';

describe('ConsultPhysicalComponent', () => {
  let component: ConsultPhysicalComponent;
  let fixture: ComponentFixture<ConsultPhysicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultPhysicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
