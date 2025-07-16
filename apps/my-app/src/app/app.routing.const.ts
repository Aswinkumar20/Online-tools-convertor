import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-home',
    loadChildren: () =>
      import('@tools-convertor/product-home').then((m) => m.ProductHomeModule),
  },
  {
    path: 'shared-ui',
    loadChildren: () =>
        import('@tools-convertor/shared-ui').then((m) => m.SharedUiModule),
  },
  {
    path: 'text-utilities',
    loadChildren: () =>
        import('@tools-convertor/text-utilities').then((m) => m.TextUtilitiesModule),
  },
  {
    path: '',
    redirectTo: 'product-home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
