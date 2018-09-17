import { Component, AfterViewInit } from '@angular/core';
import { 
  Router, NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  loading:boolean;

  constructor(private router: Router) { 
    this.loading = true;
  }

  ngAfterViewInit() { 
    this.router.events
      .subscribe((event) => { 
        if (event instanceof NavigationStart) { 
          this.loading = true;
        }
        else if (event instanceof NavigationEnd) { 
          this.loading = false;
        }
      })
  }
}
