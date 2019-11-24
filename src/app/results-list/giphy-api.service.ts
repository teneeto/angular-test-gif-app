import { Injectable, OnChanges } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { SearchInputService } from '../search-field/search-input.service';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  constructor(private http: HttpClient, private searchInputService: SearchInputService){}

  // searchValue: string = this.searchInputService.searchValue
  // private searchUrl: string = `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${this.searchValue}`

  getSearchItems(value): Observable<any> {
     const searchUrl = `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${value}`
    return this.http.get<any>(searchUrl).pipe(
      tap(data => data.data),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occoured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}