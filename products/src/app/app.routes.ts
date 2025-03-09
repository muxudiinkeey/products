import { Routes } from '@angular/router';
import { ViewAllProductsComponent } from './products/view-all-products/view-all-products.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { ViewAllProductsByCategoryComponent } from './products/view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './products/view-all-products-by-date/view-all-products-by-date.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

export const routes: Routes = [
    { path: '', component: ViewAllProductsComponent },
  { path: 'create-product', component: CreateProductComponent},
  { path: 'category/:id', component: ViewAllProductsByCategoryComponent},
  { path: 'search', component: ViewAllProductsByDateComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent},
  { path: 'product/:id', component: ViewProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent}

];
