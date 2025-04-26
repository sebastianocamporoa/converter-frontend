import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConversionService {
  constructor(private http: HttpClient) { }

  convertPdfToWord(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:3000/convert/pdf-to-word', formData, {
      responseType: 'blob'
    });
  }
}
