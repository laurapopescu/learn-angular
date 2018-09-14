import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { MessageService } from "./message.service";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
 
  constructor(private httpClient: HttpClient,
              private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> { 
    this.log("Fetching heroes");
    return this.httpClient.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  getHero(id: number): Observable<Hero> { 
    const url = `${this.heroesUrl}/${id}`;
    
    return this.httpClient.get<Hero>(url)
    .pipe(
       tap(_ => this.log(`Fetched hero with id=${id}`)),
       catchError(this.handleError<Hero>('getHero'))
      );
  }

  private log(message: string) { 
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T ) { 
    return (error:any): Observable<T> => { 
    
      //ToDo: add logging infrastructure
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
