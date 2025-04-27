import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionPageComponent } from './conversion-page.component';

describe('ConversionPageComponent', () => {
  let component: ConversionPageComponent;
  let fixture: ComponentFixture<ConversionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
