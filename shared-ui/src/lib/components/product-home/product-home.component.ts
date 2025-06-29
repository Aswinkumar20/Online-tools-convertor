import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-ui-product-home',
    templateUrl: './product-home.component.html',
    styleUrls: ['./product-home.component.scss'],
    // Add the following line to enable TSS (TypeScript Style Sheets) if using Angular v17+ with TSS support
    // styleUrl: './product-home.component.tss',
    standalone: true
})
export class ProductHomeComponent implements OnInit {
    productName: string = 'Product Home Page';
    ngOnInit(): void {
        console.log('ProductHomeComponent initialized');
        this.productName = 'Welcome to the Product Home Page';
    }    

    uniqueMethod(): void {
        console.log('This is a unique method in ProductHomeComponent');
    }
}