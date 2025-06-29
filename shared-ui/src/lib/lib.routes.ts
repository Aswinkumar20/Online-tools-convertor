import { Route } from '@angular/router';
import { ProductHomeComponent } from './components/product-home/product-home.component';

export const sharedUiRoutes: Route[] = [
  { path: 'product-home-page', component: ProductHomeComponent }
];
