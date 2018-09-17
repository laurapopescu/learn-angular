import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Article } from './article';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = "https://newsapi.org/v2/";

  constructor(private httpClient: HttpClient, 
              private messageService: MessageService) { }

  getTopHeadlines(): Observable<Article[]> { 
    const url = `${this.newsUrl}top-headlines?` + 
                'country=us&' + 
                'apiKey=c2a1938337d9464d9714da3d613aa69f';

    return this.httpClient.get<any>(url)
      .pipe(
        map(data => data.articles),
        catchError(this.handleError<Article[]>('getTopHeadlines', []))
      )
  }

  private log(message: string) { 
    this.messageService.add(`ItemService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T ) { 
    return (error:any): Observable<T> => { 
    
      //ToDo: add logging infrastructure
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

}
