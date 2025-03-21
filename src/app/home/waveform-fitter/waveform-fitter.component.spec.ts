import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveformFitterComponent } from './waveform-fitter.component';

describe('WaveformFitterComponent', () => {
  let component: WaveformFitterComponent;
  let fixture: ComponentFixture<WaveformFitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveformFitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveformFitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
