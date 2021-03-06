"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var product_service_1 = require('../services/product.service');
var anime_api_service_1 = require('../services/anime.api.service');
var router_1 = require('angular2/router');
var ProductComponent = (function () {
    function ProductComponent(_routeParams, _productService) {
        this._routeParams = _routeParams;
        this._productService = _productService;
        this.product = null;
    }
    ProductComponent.prototype.GetProduct = function (productID) {
        var _this = this;
        console.log('product ID: ' + productID);
        this._productService.getApiProduct(productID).then(function (apiProduct) { return _this.product = apiProduct; });
    };
    ProductComponent.prototype.ngOnInit = function () {
        console.log('product init');
        this.productID = this._routeParams.get('productID');
        this.GetProduct(this.productID);
    };
    ProductComponent.prototype.getSavings = function () {
        //var savings = this.product.UnitPrice - this.product.YourPrice;
        var savings = 6.99;
        return savings;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product',
            templateUrl: './views/product.html',
            providers: [product_service_1.ProductService, anime_api_service_1.ApiService],
            inputs: ["product"]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map