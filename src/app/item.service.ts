import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { MessageService } from "./message.service";
import { Item } from "./item";
import { ItemCard } from './item-card';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items';
 
  constructor(private httpClient: HttpClient,
              private messageService: MessageService) { }

  getItems(): Observable<Item[]> { 
    this.log("Fetching items");
    return this.httpClient.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
      )
  }

  getItem(id: number): Observable<Item> { 
    const url = `${this.itemsUrl}/${id}`;
    
    return this.httpClient.get<Item>(url)
    .pipe(
       tap(_ => this.log(`Fetched item with id=${id}`)),
       catchError(this.handleError<Item>('getItem'))
      );
  }

  getItemCards(): Observable<ItemCard[]> { 
    var itemCards = this.httpClient.get<Item[]>(this.itemsUrl)
    .pipe(
      map(items => items.map(item =>  (new ItemCard(item.name))),
      catchError(this.handleError<ItemCard[]>('getItemCards', []))
    ));
    return itemCards;
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
