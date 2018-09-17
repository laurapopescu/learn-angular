import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, merge, Observable } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';

import { Article } from '../article';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  news: Article[] = [];

  constructor(private newsService: NewsService, 
              private route: ActivatedRoute) { }

  ngOnInit() {

    //this.news = this.route.snapshot.data.news;

    // this.newsService.getTopHeadlines()
    //   .subscribe(news => this.news = news);

    this.mockData().subscribe(news => this.news = news);
  }

  private mockData(): Observable<Article[]> { 
    const source = of(null);

    var data = new Array();
    var article: Article = {
            source: {
              id: null,
              name: 'Phys.org'
            },
            author: null,
            title: 'New Mexico observatory closed for security reasons to reopen',
            description: 'An observatory in the mountains of southern New Mexico that had been closed since early September because of an undisclosed security concern is scheduled to reopen on Monday, officials managing the facility said.',
            url: 'https://phys.org/news/2018-09-mexico-observatory-reopen.html',
            urlToImage: 'https://cf3e497594.site.internapcdn.net/tmpl/v5/img/phys_308px.png',
            publishedAt: new Date('2018-09-17T07:12:26Z'),
            content: 'An observatory in the mountains of southern New Mexico that had been closed since early September because of an undisclosed security concern is scheduled to reopen on Monday, officials managing the facility said. The Sunspot Solar Observatory no longer faces … [+2110 chars]'
          };
    
    data.push(article);

    return merge(
        source.pipe(
            mapTo(data), 
            delay(2000)
        )
    );
  }
}
