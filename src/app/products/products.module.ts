import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
     RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id',
        // canActivate: [ ProductDetailGuard],
        component: ProductDetailsComponent
      }
    ])
  ],
  declarations: [ProductsComponent, ProductFilterPipe, ProductDetailsComponent],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
