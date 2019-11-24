import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SearchService{
  searchValue: string = 'animal'
  private api = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='
  private searchUrl: string = `${this.api}${this.searchValue}`
  constructor(private http: HttpClient){}

  getSearchItems(): Observable<any> {
    return this.http.get<any>(this.searchUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data.data))),
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