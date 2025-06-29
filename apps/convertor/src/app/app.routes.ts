import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: 'product-home', loadChildren: () => import('@convertor-workspace/shared-ui').then(m => m.SharedUiModule) }
];
