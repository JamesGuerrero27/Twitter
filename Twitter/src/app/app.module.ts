import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleTweetComponent } from './detalleTwitts/detalle-tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AllTweetUserComponent } from './todoLosTwitts/all-tweet-user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tweet/:id',
    component: DetalleTweetComponent
  },
  {
    path: 'tweet/all/:id',
    component: AllTweetUserComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DetalleTweetComponent,
    PageNotFoundComponent,
    AllTweetUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
