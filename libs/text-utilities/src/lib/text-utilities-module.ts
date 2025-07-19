import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsAndCharacterCounterComponent } from './component/wordsAndCharacterCounter/wordsAndCharacterCounter.component';
import { TextUtilitiesRoutingModule } from './text-utilities-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextCaseConvertor } from './component/textCaseConvertor/text-case-convertor';
import { RemoveDuplicateLines } from './component/removeDuplicateLines/remove-duplicate-lines';
import { TextReversalAndPalindromeChecker } from './component/textReverserAndPalindromeChecker/text-reversal-and-palindrome-checker';
import { Base64EncodeAndDecode } from './component/base64EncodeAndDecode/base64-encode-and-decode';
import { SlugGenerator } from './component/slugGenerator/slug-generator';
import { TextDifference } from './component/textDifferrence/text-difference';
import { CodeMerge } from './component/codeMerge/code-merge';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { TextToASCII } from './component/textToASCII/text-to-ASCII';
import { ProductHomeModule } from '@tools-convertor/product-home';


@NgModule({
  imports: [
    CommonModule,
    TextUtilitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    ProductHomeModule
  ],
  declarations: [
    WordsAndCharacterCounterComponent,
    TextCaseConvertor,
    TextToASCII,
    RemoveDuplicateLines,
    TextReversalAndPalindromeChecker,
    Base64EncodeAndDecode,
    SlugGenerator,
    TextDifference,
    CodeMerge,

  ],
})
export class TextUtilitiesModule {}
