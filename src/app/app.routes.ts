import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ConversionPageComponent } from './pages/conversion-page/conversion-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'convert/:from-:to', component: ConversionPageComponent },
    { path: '**', redirectTo: '' },
];
