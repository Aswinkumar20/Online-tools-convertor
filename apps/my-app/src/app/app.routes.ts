import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'product-home',
    loadChildren: () =>
      import('@tools-convertor/shared-ui').then((m) => m.SharedUiModule),
  },
    {
    path: 'product-home',
    loadChildren: () =>
      import('@tools-convertor/product-home').then((m) => m.ProductHomeModule),
  },
];
