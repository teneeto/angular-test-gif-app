import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-field/giphy-api.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  errorMessage: string;
  items = {};
  filteredItems ={};
  constructor(private searchService: SearchService ) { }

  ngOnInit(): void {
    this.searchService.getSearchItems().subscribe({
      next: items => {
        this.items = items;
        this.filteredItems = this.items;
        console.log(this.filteredItems);
        
      },
      error: err => this.errorMessage = err
    });
  }
}
