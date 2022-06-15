import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { SwiperModule } from 'swiper/angular';


/--NZ-Import-/
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { NgChartsModule } from 'ng2-charts';

import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CartproductComponent } from './components/cartproduct/cartproduct.component';
import { SwipeProductComponent } from './components/swipe-product/swipe-product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginComponent } from './backend/components/login/login.component';
import { MainClientComponent } from './components/main-client/main-client.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { MainAdminComponent } from './backend/components/main-admin/main-admin.component';
import { DashboardComponent } from './backend/components/dashboard/dashboard.component';
import { InfoComponent } from './backend/components/info/info.component';
import { ListcustomerComponent } from './backend/components/listcustomer/listcustomer.component';
import { ProductStoreComponent } from './backend/components/product-store/product-store.component';
import { CategoryListComponent } from './backend/components/category-list/category-list.component';
import { TagListComponent } from './backend/components/tag-list/tag-list.component';
import { BillListComponent } from './backend/components/bill-list/bill-list.component';




registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BannerComponent,
    CartproductComponent,
    SwipeProductComponent,
    CardProductComponent,
    AddressComponent,
    ContactComponent,
    FormComponent,
    NotfoundpageComponent,
    ListProductComponent,
    LoginComponent,
    MainClientComponent,
    FormDataComponent,
    MainAdminComponent,
    DashboardComponent,
    InfoComponent,
    ListcustomerComponent,
    ProductStoreComponent,
    CategoryListComponent,
    TagListComponent,
    BillListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NzCardModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyModule,
    NzCarouselModule,
    NzGridModule,
    NzSpinModule,
    NzSpaceModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    SwiperModule,
    NzToolTipModule,
    NzFormModule,
    NzResultModule,
    NzPopconfirmModule,
    NzNotificationModule,
    NzRateModule,
    NzAvatarModule,
    NzInputNumberModule,
    NzEmptyModule,
    NzListModule,
    NzMessageModule,
    NzBadgeModule,
    NzCheckboxModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzTableModule,
    NzDropDownModule,
    NzModalModule,
    NzCalendarModule,
    NzAlertModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
