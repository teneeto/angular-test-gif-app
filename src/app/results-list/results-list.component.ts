import { Component, Input, OnChanges } from '@angular/core';
import { SearchService } from './giphy-api.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnChanges {
  imageWidth: number = 150;
  imageMargin: number = 2;
  errorMessage: string;
  items = [];
  filteredItems =[];
  btnText: string = "show all"
  sliceLimit: number = 8
  @Input() test;
  constructor(private searchService: SearchService ) { }

  // ngOnInit(): void {
  //   this.searchService.getSearchItems(this.test).subscribe({
  //     next: items => {
  //       this.items = items;
  //       this.filteredItems = this.items;
  //     },
  //     error: err => this.errorMessage = err
  //   });
  // }
  ngOnChanges(){
    this.searchService.getSearchItems(this.test).subscribe({
      next: items => {
        this.items = items.data;
        this.filteredItems = this.items.slice(0, this.sliceLimit);
      },
      error: err => this.errorMessage = err
    });
  }
  showAll(){
    if (this.btnText === "show all"){
      this.filteredItems = this.items;
      return this.btnText = "show less" 
    }else{
      this.filteredItems = this.items.slice(0, this.sliceLimit);
      return this.btnText = "show all"
    }
    

  }
}
