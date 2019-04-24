import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './header/home/home.component';
import { ReviewsComponent } from './header/reviews/reviews.component';
import { GamesComponent } from './header/games/games.component';
import { CleanerDirective } from './cleaner.directive';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewsComponent,
    GamesComponent,
    CleanerDirective,
    LinkComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
