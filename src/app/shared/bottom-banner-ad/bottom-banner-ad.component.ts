import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bottom-banner-ad',
  standalone: true,
  templateUrl: './bottom-banner-ad.component.html',
  styleUrl: './bottom-banner-ad.component.css'
})
export class BottomBannerAdComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Inyectar script de AdSense solo una vez
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // Iniciar anuncio
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }
}
