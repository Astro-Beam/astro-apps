import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalProcessingComponent } from './signal-processing.component';

describe('SignalProcessingComponent', () => {
  let component: SignalProcessingComponent;
  let fixture: ComponentFixture<SignalProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalProcessingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
