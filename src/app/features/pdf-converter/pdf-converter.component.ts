import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConversionService } from '../../core/services/conversion.service';

@Component({
  selector: 'app-pdf-converter',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  templateUrl: './pdf-converter.component.html',
  styleUrls: ['./pdf-converter.component.css'],
})
export class PdfConverterComponent {
  loading = false;
  isHovering = false;
  private snackbar = inject(MatSnackBar);

  constructor(private conversionService: ConversionService) { }

  @Output() conversionCompleted = new EventEmitter<void>();

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
    const file = event.dataTransfer?.files?.[0];
    if (file) this.handleFile(file);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.handleFile(file);
  }

  private handleFile(file: File) {
    this.loading = true;
    this.conversionService.convertPdfToWord(file).subscribe({
      next: (blob) => this.downloadFile(blob),
      error: () => this.showError(),
    });
  }

  private downloadFile(blob: Blob) {
    this.loading = false;
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.docx';
    a.click();
    this.snackbar.open('¡Conversión exitosa!', 'Cerrar', { duration: 3000 });
    this.conversionCompleted.emit(); // Notifica al padre
  }

  private showError() {
    this.loading = false;
    this.snackbar.open('Error al convertir el archivo.', 'Cerrar', { duration: 4000 });
  }
}
