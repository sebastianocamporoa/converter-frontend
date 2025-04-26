import { Component } from '@angular/core';
import { BottomBannerAdComponent } from '../../shared/bottom-banner-ad/bottom-banner-ad.component';
import { PdfConverterComponent } from '../../features/pdf-converter/pdf-converter.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BottomBannerAdComponent,
    PdfConverterComponent,
    BottomBannerAdComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  onConversionCompleted() {
    console.log('Conversión completada desde Home!');
    // Aquí podrías hacer otras acciones como analytics, etc.
  }
}
