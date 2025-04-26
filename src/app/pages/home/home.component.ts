import {
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConversionService } from '../../services/conversion.service';
import { BottomBannerAdComponent } from '../../shared/bottom-banner-ad/bottom-banner-ad.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    BottomBannerAdComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  loading = false;
  isHovering = false;
  snackbar = inject(MatSnackBar);

  constructor(private conversionService: ConversionService) { }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isHovering = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isHovering = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isHovering = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.convert(file);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.convert(file);
  }

  private convert(file: File) {
    this.loading = true;

    this.conversionService.convertPdfToWord(file).subscribe({
      next: (blob) => {
        this.loading = false;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted.docx';
        a.click();
        this.snackbar.open('¡Conversión exitosa!', 'Cerrar', { duration: 3000 });
      },
      error: () => {
        this.loading = false;
        this.snackbar.open('Error al convertir el archivo.', 'Cerrar', { duration: 4000 });
      },
    });
  }
}
