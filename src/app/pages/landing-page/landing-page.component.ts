import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormatSelectorComponent } from '../../shared/format-selector/format-selector.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    CommonModule,
    RouterModule,
    FormatSelectorComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
