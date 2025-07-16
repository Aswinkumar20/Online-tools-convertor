import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'lib-words-and-character-counter',
  standalone: false,
  templateUrl: './wordsAndCharacterCounter.component.html',
  styleUrl: './wordsAndCharacterCounter.component.scss',
})
export class WordsAndCharacterCounterComponent implements OnInit {
  
 paragraphControl = new FormControl('');
  showCharacterCount = true;

  wordCount = 0;
  charCount = 0;
  charCountNoSpaces = 0;

  ngOnInit(): void {
    const saved = localStorage.getItem('paragraph');
    if (saved) this.paragraphControl.setValue(saved);

    this.paragraphControl.valueChanges.pipe(debounceTime(150)).subscribe(value => {
      this.updateCounts(value || '');
      localStorage.setItem('paragraph', value || '');
    });
  }

  updateCounts(text: string): void {
    const trimmed = text.trim();
    this.wordCount = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
    this.charCount = text.length;
    this.charCountNoSpaces = text.replace(/\s/g, '').length;
  }

  copyText(): void {
    navigator.clipboard.writeText(this.paragraphControl.value || '').then(() => {
      alert('Text copied to clipboard!');
    });
  }

  clearText(): void {
    this.paragraphControl.setValue('');
  }
}
