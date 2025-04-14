import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3celestialComponent } from './d3celestial.component';

describe('D3celestialComponent', () => {
  let component: D3celestialComponent;
  let fixture: ComponentFixture<D3celestialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3celestialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3celestialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
