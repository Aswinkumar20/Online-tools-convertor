import { Route } from '@angular/router';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { WordsCounterComponent } from './components/words-counter/words-counter.component';

export const sharedUiRoutes: Route[] = [
  { path: 'product-home-page', component: ProductHomeComponent },
  { path: 'words-counter', component: WordsCounterComponent }
];
