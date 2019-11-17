import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string = 'https://itunes.apple.com/search?term=';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(searchTerm): Observable<any> {
    return this.http.get(this.api + searchTerm + '&entity=album&limit=10')
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)

    } else {
      console.log(error.status)
    }
    return throwError(
      console.log('Something is wrong!'));
  };
}


