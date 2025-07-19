import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-navigation',
  standalone: false,
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  title = 'My Component';
  categoriesList:any = [
    {
      "name":'Text & utilities',
      "description":'Tools for text manipulation and utilities',
      "icon":'text_fields',
      "path":'text-utilities',
      "subCategories" : [
        {
          "name": "words-and-character-counter",
          "path":'text-utilities/words-and-character-counter'
        },
        {
          "name": "text-case-convertor",
          "path":'text-utilities/text-case-convertor'
        },
        {
          "name": "text-to-ascii",
          "path":'text-utilities/text-to-ascii'
        },
        {
          "name": "remove-duplicate-lines",
          "path":'text-utilities/remove-duplicate-lines'
        },
        {
          "name": "text-reversal-and-palindrome-checker",
          "path":'text-utilities/text-reversal-and-palindrome-checker'
        },
        {
          "name": "base64-encode-and-decode",
          "path":'text-utilities/base64-encode-and-decode'
        },
        {
          "name": "slug-generator",
          "path":'text-utilities/slug-generator'
        },
        {
          "name": "text-difference",
          "path":'text-utilities/text-difference'
        },
        {
          "name": "code-merge",
          "path":'text-utilities/code-merge'
        }
      ]
    }
    
  ];

  constructor(private router: Router) {}

  navigateTo(path: string) {
    if(path === 'home') {
      this.router.navigate(['/product-home']);
      return;
    }
    this.router.navigate(["../" + path]);
  }
}
