import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './components/app_component/app.component';
import { HeaderComponent } from './components/header_component/header.component';
import { FooterComponent } from './components/footer_component/footer.component';
import { SlimFooterComponent } from './components/slim-footer_component/slim-footer.component';

import { MainComponent } from './components/main_component/main.component';
import { SearchComponent } from './components/search_component/search.component';
import { ProductDetailComponent } from './components/product-detail_component/product-detail.component';
import { PageNotFoundComponent } from './components/page-not-found_component/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlimFooterComponent,

    MainComponent,
    SearchComponent,
    ProductDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
