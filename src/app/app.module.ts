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
import { MainAdminComponent } from './backend/components/main-admin/main-admin.component';
import { IndexBackendComponent } from './backend/components/index-backend/index-backend.component';
import { TabledataComponent } from './backend/components/tabledata/tabledata.component';

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
    MainAdminComponent,
    IndexBackendComponent,
    TabledataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
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
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
