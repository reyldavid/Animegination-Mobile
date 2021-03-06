﻿import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {Component} from 'angular2/core';
//import {Product} from './models/product';
//import {ApiProduct} from './models/product';
import {HomeComponent} from './products/home.component';
import {ProductComponent} from './products/product.component';
import {ProductsListComponent} from './products/productsList.component';
import {ProductsSliceComponent} from './products/productsSlice.component';
import {AboutUsComponent} from './customers/aboutUs.component';
import {AccountInfoComponent} from './customers/accountInfo.component';
import {AccountSettingsComponent} from './customers/accountSettings.component';
import {ContactUsComponent} from './customers/contactUs.component';
import {LoginComponent} from './customers/login.component';
import {RegisterComponent} from './customers/register.component';
import {OrdersComponent} from './customers/orders.component';
import {CategoriesComponent} from './products/categories.component';
import {ShoppingCartComponent} from './customers/shoppingCart.component';
import {NewsFeedComponent} from './customers/newsFeed.component';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'aya-app',
    templateUrl: './views/App.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    //        { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/all', name: 'ProductsList', component: ProductsListComponent },
    { path: '/detail', name: 'Product', component: ProductComponent },
    { path: '/slice', name: 'Slice', component: ProductsSliceComponent },
    { path: '/about', name: 'About', component: AboutUsComponent },
    { path: '/account', name: 'AccountInfo', component: AccountInfoComponent },
    { path: '/settings', name: 'Settings', component: AccountSettingsComponent },
    { path: '/contact', name: 'Contact', component: ContactUsComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/orders', name: 'Orders', component: OrdersComponent },
    { path: '/categories', name: 'Categories', component: CategoriesComponent },
    { path: '/news', name: 'News', component: NewsFeedComponent },
    { path: '/cart', name: 'Cart', component: ShoppingCartComponent }
])

export class AppComponent implements OnInit {
    //selectedProduct: ApiProduct;

    constructor(private _router: Router) {
    }

    ngOnInit(): any {
        console.log('app init');
        this._router.navigate(['Home']);
    }

    OnHome() {
        //this.selectedProduct = null;
    }

    //OnLiClick(itemName: string) {
    //    switch (itemName) {
    //        case 'about':
    //            console.log('about click');
    //            console.log('route to about');
    //            this._router.navigate(['About']);
    //            break;
    //        case 'contact':
    //            console.log('contact click');
    //            console.log('route to contact');
    //            this._router.navigate(['Contact']);
    //            break;
    //        default:
    //            console.log('route to home');
    //            this._router.navigate(['Home']);
    //    }
    //}
}

