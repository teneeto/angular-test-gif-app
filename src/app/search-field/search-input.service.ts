import { Injectable } from "@angular/core";

@Injectable()
export class SearchInputService {
  searchValue: string = "bad habit";


  getSearchInput(formValue: string) {
      this.searchValue = formValue;
    }
  
}
