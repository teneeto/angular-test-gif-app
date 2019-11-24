import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './giphy-api.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  errorMessage: string;
  items = {};
  filteredItems ={};
  @Input() test;
  constructor(private searchService: SearchService ) { }

  ngOnInit(): void {
    this.searchService.getSearchItems(this.test).subscribe({
      next: items => {
        this.items = items;
        this.filteredItems = this.items;
      },
      error: err => this.errorMessage = err
    });
  }
  ngOnChanges(){
    this.searchService.getSearchItems(this.test).subscribe({
      next: items => {
        this.items = items;
        this.filteredItems = this.items;
      },
      error: err => this.errorMessage = err
    });
  }
}
