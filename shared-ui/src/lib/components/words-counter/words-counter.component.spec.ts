import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsCounterComponent } from './words-counter.component';

describe('WordsCounterComponent', () => {
  let component: WordsCounterComponent;
  let fixture: ComponentFixture<WordsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
