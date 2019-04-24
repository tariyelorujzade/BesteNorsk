import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
      // trigger('wild',[
      //   state('close',style({ display:'none'})),
      //   state('open',style({display:'block'})),
      //   transition('*<=>*',animate(500))
      // ]) 
    ]
})
export class AppComponent implements OnInit{
 //state='close';
 navbarOpen:boolean=false;
   
  ngOnInit(){ }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
