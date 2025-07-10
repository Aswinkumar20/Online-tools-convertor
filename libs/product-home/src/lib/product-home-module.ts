import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeRoutingModule } from './product-home-routing.module';
import { MyComponent } from './component/myComponent/my-component';

@NgModule({
  imports: [
    CommonModule,
    ProductHomeRoutingModule,
  ],
  declarations: [MyComponent],
  exports: [MyComponent],
})
export class ProductHomeModule {}
