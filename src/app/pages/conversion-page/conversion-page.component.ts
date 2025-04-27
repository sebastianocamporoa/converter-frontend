import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConversionService } from '../../core/services/conversion.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-conversion-page',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './conversion-page.component.html',
  styleUrls: ['./conversion-page.component.css'],
})
export class ConversionPageComponent implements OnInit {
  from = '';
  to = '';
  loading = false;
  private snackbar = inject(MatSnackBar);

  constructor(
    private route: ActivatedRoute,
    private conversionService: ConversionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.handleFile(file);
    }
  }

  private handleFile(file: File) {
    this.loading = true;

    // Por ahora, usando siempre el mismo método para PDF → Word
    // Luego puedes hacer que use diferentes métodos según `from` y `to`
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
    a.download = `converted.${this.to}`;
    a.click();
    this.snackbar.open('¡Conversión exitosa!', 'Cerrar', { duration: 3000 });
  }

  private showError() {
    this.loading = false;
    this.snackbar.open('Error al convertir el archivo.', 'Cerrar', { duration: 4000 });
  }
}
