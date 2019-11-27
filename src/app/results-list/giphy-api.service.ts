import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { SearchInputService } from "../search-field/search-input.service";

@Injectable({
    providedIn: "root",
})
export class SearchService {
    
    constructor(
        private http: HttpClient,
        private searchInputService: SearchInputService
    ) {}

    // searchValue: string = this.searchInputService.searchValue
    // private searchUrl: string = `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${this.searchValue}`

    getSearchItems(value: string): Observable<any> {
        const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${value}&limit=${1000}`;
        return this.http.get<any>(searchUrl).pipe(
            tap(data => {
              (items = data.data)
        }),
            catchError(this.handleError)
        );
    }
    getItems(id: string) {
        return items.find(detail => detail.id === id)
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occoured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
let items = [];
