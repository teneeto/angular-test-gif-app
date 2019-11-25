import { Injectable } from "@angular/core";
import { SearchService } from '../results-list/giphy-api.service';

@Injectable()
export class SearchInputService {
  searchValue: string = "bad habit";


  getSearchInput(formValue: string) {
      this.searchValue = formValue;

    }
  
}
