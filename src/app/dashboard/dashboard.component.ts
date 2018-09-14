import { Component, OnInit } from '@angular/core';
import { ItemCard } from '../item-card';
import { ItemService } from "../item.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cards: ItemCard[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItemCards()
      .subscribe(cards => this.cards = cards.slice(1,5));
  }
}
