import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search/:category', component: SearchComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [AppComponent, SearchComponent, IndexComponent, DetailComponent],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
