import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { CartproductComponent } from './components/cartproduct/cartproduct.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'',component:ContentComponent},
  {path:'address',component:AddressComponent},
  {path:'contact', component:ContactComponent},
  {path:'not-found',component:NotfoundpageComponent},
  {path:'product-category/:id',component:ListProductComponent},
  {path:'product-detail/:id',component:ProductComponent},
  {path:'cart',component:CartproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
