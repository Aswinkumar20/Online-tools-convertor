import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeRoutingModule } from './product-home-routing.module';
import { MyComponent } from './component/myComponent/my-component';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { Navigation } from './component/navigation/navigation';
@NgModule({
  imports: [CommonModule, ProductHomeRoutingModule, FlexLayoutModule],
  declarations: [MyComponent, Navigation],
  exports: [MyComponent, Navigation],
})
export class ProductHomeModule {}
