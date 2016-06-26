import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'categories',
    templateUrl: './views/shoppingCart.html'
})

export class ShoppingCartComponent implements OnInit {

    ngOnInit(): any {
        console.log('shopping cart init');
    }
}