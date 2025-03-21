import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyViewerComponent } from './sky-viewer.component';

describe('SkyViewerComponent', () => {
  let component: SkyViewerComponent;
  let fixture: ComponentFixture<SkyViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkyViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
