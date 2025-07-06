import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-words-counter',
  templateUrl: './words-counter.component.html',
  styleUrls: ['./words-counter.component.scss']
})
export class WordsCounterComponent {
  text = '';
  wordCount = 0;
  charCount = 0;

  selectionInfo:any = '';

  @ViewChild('textArea', { static: true }) textArea!: ElementRef<HTMLTextAreaElement>;

  // Drag state
  private dragging = false;
  private offsetX = 0;
  private offsetY = 0;

  countWordsAndCharacters() {
    const trimmed = this.text.trim();
    this.wordCount = trimmed.length ? trimmed.split(/\s+/).length : 0;
    this.charCount = this.text.length;
  }

  updateSelection() {
    const textarea = this.textArea.nativeElement;
    const value = textarea.value;
    const selStart = textarea.selectionStart;
    const selEnd = textarea.selectionEnd;
    const selected = value.slice(selStart, selEnd).trim();

    if (!selected) {
      this.selectionInfo = null;
      return;
    }

    const spaceInSelection = /\s/.test(selected);
    this.selectionInfo = {
      text: selected,
      type: spaceInSelection ? 'text' : 'word'
    };
  }

  clear() {
    this.text = '';
    this.countWordsAndCharacters();
    this.selectionInfo = null;
  }

  // Draggable logic
  startDrag(event: MouseEvent) {
    const rect = this.textArea.nativeElement.getBoundingClientRect();
    this.dragging = true;
    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.dragging) return;

    const container = this.textArea.nativeElement.parentElement as HTMLElement;
    container.style.position = 'absolute';
    container.style.left = event.clientX - this.offsetX + 'px';
    container.style.top = event.clientY - this.offsetY + 'px';
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.dragging = false;
  }
}
