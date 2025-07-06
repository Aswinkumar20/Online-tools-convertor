import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedUiRoutes } from './lib.routes';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WordsCounterComponent } from './components/words-counter/words-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedUiRoutes),
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    ProductHomeComponent,
    WordsCounterComponent
  ],
  exports: [
  ]
})
export class SharedUiModule {}
