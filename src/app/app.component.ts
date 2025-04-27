import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBannerAdComponent } from './shared/bottom-banner-ad/bottom-banner-ad.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottomBannerAdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
