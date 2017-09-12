import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main_component/main.component';
import { SearchComponent } from './components/search_component/search.component';
import { ProductDetailComponent } from './components/product-detail_component/product-detail.component';
import { PageNotFoundComponent } from './components/page-not-found_component/page-not-found.component';

const routerPaths: Routes = [
    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Main', component: MainComponent },
    { path: 'Search/:query', component: SearchComponent },
    { path: 'Search/:category/:query', component: SearchComponent },
    { path: 'Product/:id', component: ProductDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routerPaths) ],
    exports: [ RouterModule ]
})

export class AppRouterModule { }