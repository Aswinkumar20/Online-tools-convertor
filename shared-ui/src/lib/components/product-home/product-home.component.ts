import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-ui-product-home',
    templateUrl: './product-home.component.html',
    styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
    mainHeaderName: string = 'Product Home Page';
    ngOnInit(): void {
        console.log('ProductHomeComponent initialized');
        this.mainHeaderName = 'Welcome to the Product Home Page';
    }

    uniqueMethod(): void {
        console.log('This is a unique method in ProductHomeComponent');
    }
}