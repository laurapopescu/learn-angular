import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { NewsResolver } from './news.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  { path: 'items', component: ItemsComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'dashboard', component: DashboardComponent, resolve: {news: NewsResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [ 
    NewsResolver
  ]
})
export class AppRoutingModule {}