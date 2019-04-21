import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './header/games/games.component';
import { HomeComponent } from './header/home/home.component';
import { ReviewsComponent } from './header/reviews/reviews.component';

const routes: Routes = [
  { path:'',component:HomeComponent,pathMatch:'full'},
  { path:'games',component:GamesComponent},
  { path:'reviews',component:ReviewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
