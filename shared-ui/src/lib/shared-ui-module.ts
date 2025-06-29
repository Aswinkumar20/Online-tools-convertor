import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedUiRoutes } from './lib.routes';
import { ProductHomeComponent } from './components/product-home/product-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedUiRoutes),
    ProductHomeComponent
  ],
  declarations: []
})
export class SharedUiModule {}
