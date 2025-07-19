import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsAndCharacterCounterComponent } from './component/wordsAndCharacterCounter/wordsAndCharacterCounter.component';
import { TextCaseConvertor } from './component/textCaseConvertor/text-case-convertor';
import { TextToASCII } from './component/textToASCII/text-to-ASCII';
import { RemoveDuplicateLines } from './component/removeDuplicateLines/remove-duplicate-lines';
import { TextReversalAndPalindromeChecker } from './component/textReverserAndPalindromeChecker/text-reversal-and-palindrome-checker';
import { Base64EncodeAndDecode } from './component/base64EncodeAndDecode/base64-encode-and-decode';
import { SlugGenerator } from './component/slugGenerator/slug-generator';
import { TextDifference } from './component/textDifferrence/text-difference';
import { CodeMerge } from './component/codeMerge/code-merge';

const routes: Routes = [
  {
    path: 'words-and-character-counter',
    component: WordsAndCharacterCounterComponent,
  },
  {
    path: 'text-case-convertor',
    component: TextCaseConvertor,
  },
  {
    path: 'text-to-ascii',
    component : TextToASCII
  },
  {
    path: 'remove-duplicate-lines',
    component: RemoveDuplicateLines
  },
  {
    path: 'text-reversal-and-palindrome-checker',
    component: TextReversalAndPalindromeChecker
  },
  {
    path: 'base64-encode-and-decode',
    component: Base64EncodeAndDecode
  },
  {
    path: 'slug-generator',
    component: SlugGenerator
  },
  {
    path: 'text-difference',
    component: TextDifference
  },
  {
    path: 'code-merge',
    component: CodeMerge
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextUtilitiesRoutingModule {}
