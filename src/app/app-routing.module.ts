import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './header/games/games.component';
import { HomeComponent } from './header/home/home.component';
import { ReviewsComponent } from './header/reviews/reviews.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [
  { path:'',component:HomeComponent,pathMatch:'full'},
  { path:'games',component:GamesComponent},
  { path:'reviews',component:ReviewsComponent, 
      children:[ {path:'les',component:LinkComponent}] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
