import { Component, OnInit, Input } from '@angular/core';

import { ItemService } from '../item.service';
import { ItemCard } from '../item-card';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() card: ItemCard;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
}
