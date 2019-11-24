import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    constructor() {
    }

    ngOnInit() {
    }
}
