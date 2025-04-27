import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-format-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './format-selector.component.html',
  styleUrl: './format-selector.component.css'
})
export class FormatSelectorComponent {
  formats = ['pdf', 'word', 'jpg', 'png', 'mp4', 'mp3', 'docx'];
  fromFormat = '';
  toFormat = '';

  constructor(private router: Router) { }

  convert() {
    if (this.fromFormat && this.toFormat) {
      const path = `/convert/${this.fromFormat}-${this.toFormat}`;
      this.router.navigateByUrl(path);
    }
  }
}
