import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsAndCharacterCounterComponent } from './component/wordsAndCharacterCounter/wordsAndCharacterCounter.component';

const routes: Routes = [
  {
    path: 'words-and-character-counter',
    component: WordsAndCharacterCounterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextUtilitiesRoutingModule {}
