import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { result } from "../shared/models/results.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string = 'https://itunes.apple.com/search?term=';

  newsapi: string = 'https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(searchTerm): Observable<any> {
    return this.http.get(this.api + searchTerm + '&entity=album')
    .pipe(
      catchError(this.handleError)
    );
  }

  getNews(): Observable<any> {
    return this.http.get(this.newsapi)
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


