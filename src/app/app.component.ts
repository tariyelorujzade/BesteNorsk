import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
      trigger('wild',[
        state('close',style({position:'absolute', display:'none'})),
        state('open',style({display:'block'})),
        transition('*<=>*',animate(1000))
      ]) 
    ]
})
export class AppComponent implements OnInit{
 state='close';
   
  ngOnInit(){ }

  openMenu(){
   console.log('clicked');
   this.state=='close'?this.state='open':this.state='close';
  }
}
