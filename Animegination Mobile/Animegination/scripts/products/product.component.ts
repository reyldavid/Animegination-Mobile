import {Component} from 'angular2/core';
import {Product} from '../models/product';
import {ApiProduct} from '../models/product';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'product',
    templateUrl: './views/product.html',
    providers: [ProductService, ApiService],
    inputs: ["product"]
})

export class ProductComponent implements OnInit {
    public product: ApiProduct = null;
    private productID: string;

    constructor(private _routeParams: RouteParams,
        private _productService: ProductService) {
    }

    GetProduct(productID: string) {
        console.log('product ID: ' + productID);
        this._productService.getApiProduct(
            productID).then((apiProduct: ApiProduct) => this.product = apiProduct);
    }

    ngOnInit(): any {
        console.log('product init');
        this.productID = this._routeParams.get('productID');
        this.GetProduct(this.productID);
    }

    getSavings(): number {
        //var savings = this.product.UnitPrice - this.product.YourPrice;
        var savings = 6.99;
        return savings;
    }
}