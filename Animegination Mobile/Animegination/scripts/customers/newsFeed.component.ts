﻿import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'categories',
    templateUrl: './views/newsFeed.html'
})

export class NewsFeedComponent implements OnInit {

    ngOnInit(): any {
        console.log('news feed init');
    }
}