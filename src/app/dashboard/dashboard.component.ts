import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  news: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadlines()
      .subscribe(news => this.news = news);
  }
}
