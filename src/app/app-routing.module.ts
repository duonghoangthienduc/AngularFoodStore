import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './backend/components/bill-list/bill-list.component';
import { CategoryListComponent } from './backend/components/category-list/category-list.component';

import { DashboardComponent } from './backend/components/dashboard/dashboard.component';
import { InfoComponent } from './backend/components/info/info.component';
import { ListcustomerComponent } from './backend/components/listcustomer/listcustomer.component';

import { LoginComponent } from './backend/components/login/login.component';
import { MainAdminComponent } from './backend/components/main-admin/main-admin.component';
import { ProductStoreComponent } from './backend/components/product-store/product-store.component';
import { TagListComponent } from './backend/components/tag-list/tag-list.component';
import { AddressComponent } from './components/address/address.component';
import { CartproductComponent } from './components/cartproduct/cartproduct.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { FormDataComponent } from './components/form-data/form-data.component';
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
      {path:'cart/form-data', component: FormDataComponent}
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
      {path: 'dashboard', component: DashboardComponent},
      {path: 'info', component:InfoComponent},
      {path:'customer', component:ListcustomerComponent},
      {path:'productlist',component:ProductStoreComponent},
      {path:'categorylist',component:CategoryListComponent},
      {path:'taglist',component:TagListComponent},
      {path:'bill',component:BillListComponent}
    ],
  },
];

const backend: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
