import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/pages/home/home.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(HomeComponent, {
  providers: [provideHttpClient()],
});
