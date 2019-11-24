import { Component, OnInit } from '@angular/core';
import { SearchInputService } from './search-input.service';


@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    constructor(private searchInputService: SearchInputService) {
    }
    search(formValues){
      this.searchInputService.getSearchInput(formValues.searchInput)
    }

    ngOnInit() {
    }
}
