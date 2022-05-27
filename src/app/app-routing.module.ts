import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexBackendComponent } from './backend/components/index-backend/index-backend.component';
import { LoginComponent } from './backend/components/login/login.component';
import { MainAdminComponent } from './backend/components/main-admin/main-admin.component';
import { AddressComponent } from './components/address/address.component';
import { CartproductComponent } from './components/cartproduct/cartproduct.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { MainClientComponent } from './components/main-client/main-client.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: MainClientComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: '', component: ContentComponent },
      { path: 'address', component: AddressComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'not-found', component: NotfoundpageComponent },
      { path: 'product-category/:id', component: ListProductComponent },
      { path: 'product-detail/:id', component: ProductComponent },
      { path: 'cart', component: CartproductComponent },
    ],
  },
  {
    path: 'admin',
    component: MainAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {path: 'login',component: LoginComponent},
      {path: 'index',component: IndexBackendComponent},
    ],
  },
];

const backend: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
