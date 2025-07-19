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
  categoriesList: any = [
    {
      name: 'Text & Utilities',
      description: 'Useful tools for editing and analyzing text',
      icon: 'text_fields',
      path: 'text-utilities',
      subCategories: [
        {
          name: 'Word & Character Counter',
          path: 'text-utilities/words-and-character-counter',
          description: 'Count words, characters, and spaces in your text instantly.'
        },
        {
          name: 'Text Case Changer',
          path: 'text-utilities/text-case-convertor',
          description: 'Convert text to UPPERCASE, lowercase, or Capitalized formats.'
        },
        {
          name: 'Convert Text to ASCII',
          path: 'text-utilities/text-to-ascii',
          description: 'Convert characters to their ASCII values and back.'
        },
        {
          name: 'Remove Duplicate Lines',
          path: 'text-utilities/remove-duplicate-lines',
          description: 'Eliminate repeated lines from your text quickly.'
        },
        {
          name: 'Reverse Text & Check Palindrome',
          path: 'text-utilities/text-reversal-and-palindrome-checker',
          description: 'Reverse text or check if a string is a palindrome.'
        },
        {
          name: 'Base64 Encoder & Decoder',
          path: 'text-utilities/base64-encode-and-decode',
          description: 'Encode or decode text using Base64 format.'
        },
        {
          name: 'Create URL Slugs',
          path: 'text-utilities/slug-generator',
          description: 'Generate clean, SEO-friendly slugs from your text.'
        },
        {
          name: 'Compare Text Differences',
          path: 'text-utilities/text-difference',
          description: 'Find and highlight differences between two text blocks.'
        },
        {
          name: 'Merge Code Snippets',
          path: 'text-utilities/code-merge',
          description: 'Merge and review differences in code or text snippets.'
        }
      ]
    }
  ];
  ;


  isDropdownOpen = false;
  hoveredCategory: any = null;

  constructor(private router: Router) { }

  navigateTo(path: string) {
    if (path === 'home') {
      this.router.navigate(['/product-home']);
      return;
    }
    this.router.navigate(["../" + path]);
  }

  onDropdownEnter(): void {
    this.isDropdownOpen = true;
    this.hoveredCategory = null; // Reset to show empty right panel
  }


}
