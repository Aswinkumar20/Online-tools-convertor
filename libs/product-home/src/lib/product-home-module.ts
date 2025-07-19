import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeRoutingModule } from './product-home-routing.module';
import { MyComponent } from './component/myComponent/my-component';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { Navigation } from './component/navigation/navigation';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, ProductHomeRoutingModule, FlexLayoutModule, MatTooltipModule ],
  declarations: [MyComponent, Navigation],
  exports: [MyComponent, Navigation],
})
export class ProductHomeModule {}


