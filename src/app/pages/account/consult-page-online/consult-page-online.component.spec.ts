import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPageOnlineComponent } from './consult-page-online.component';

describe('ConsultPageOnlineComponent', () => {
  let component: ConsultPageOnlineComponent;
  let fixture: ComponentFixture<ConsultPageOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultPageOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultPageOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
