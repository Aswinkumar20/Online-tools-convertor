import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsAndCharacterCounterComponent } from './component/wordsAndCharacterCounter/wordsAndCharacterCounter.component';
import { TextUtilitiesRoutingModule } from './text-utilities-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    TextUtilitiesRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WordsAndCharacterCounterComponent]

})
export class TextUtilitiesModule {  }
