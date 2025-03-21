import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellariumComponent } from './stellarium.component';

describe('StellariumComponent', () => {
  let component: StellariumComponent;
  let fixture: ComponentFixture<StellariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StellariumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
