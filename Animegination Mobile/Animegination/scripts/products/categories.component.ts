import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'categories',
    templateUrl: './views/categories.html'
})

export class CategoriesComponent implements OnInit {

    ngOnInit(): any {
        console.log('categories init');
    }
}