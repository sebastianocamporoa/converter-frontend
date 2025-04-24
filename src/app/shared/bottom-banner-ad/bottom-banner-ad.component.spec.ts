import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBannerAdComponent } from './bottom-banner-ad.component';

describe('BottomBannerAdComponent', () => {
  let component: BottomBannerAdComponent;
  let fixture: ComponentFixture<BottomBannerAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomBannerAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomBannerAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
