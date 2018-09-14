import { Component, OnInit } from '@angular/core';
import { Item } from "../item"
import { ItemService } from "../item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  selectedItem: Item;
  items: Item[];

  item: Item = { 
    id: 1, 
    name: "laura"
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() { 
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }
}
