import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatSelectorComponent } from './format-selector.component';

describe('FormatSelectorComponent', () => {
  let component: FormatSelectorComponent;
  let fixture: ComponentFixture<FormatSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
