﻿import {Component} from 'angular2/core';
import {ProductComponent} from './product.component';
import {ApiProduct} from '../models/product';
import {ListType} from '../models/listtype';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {OnInit} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'productsSlice',
    templateUrl: './views/productsSlice.html',
    directives: [ProductComponent],
    providers: [ProductService, ApiService],
    inputs: ['listTypeID'],
    outputs: ['productSelected']
})

export class ProductsSliceComponent implements OnInit {
    listTypeID: number;
    listType: ListType = { "ListTypeID": 0, "ListTypeName": "", "Description": "" };
    public apiProducts: ApiProduct[];
    public currentProduct: ApiProduct = null;
    productSelected = new EventEmitter<ApiProduct>();

    constructor(private _productService: ProductService, private _router: Router) { }

    OnSelectProduct(product: ApiProduct) {
        //this.currentProduct = product;
        //this.productSelected.emit(product);
        console.log('product slice product ID: ' + product.ProductID);
        this._router.navigate(['Product', { productID: product.ProductID }]);
    }

    GetProductsSlice(listTypeID: number) {
        this._productService.getApiListing(
            listTypeID).then((apiProducts: ApiProduct[]) => this.apiProducts = apiProducts);
    }

    GetProductListType(listTypeID: number) {
        this._productService.getApiListType(
            listTypeID).then((listType: ListType) => this.listType = listType);
    }

    ngOnInit(): any {
        console.log('product slice init');
        this.GetProductListType(this.listTypeID);
        this.GetProductsSlice(this.listTypeID);
    }
}
