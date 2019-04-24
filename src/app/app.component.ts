import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

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
 navigated:boolean=false;
 returned:boolean=false;

 constructor(private router:Router,private route:ActivatedRoute){ }
   
  ngOnInit(){ }

  getReturned(){
    this.navigated=false;
  }

  navigateUrl(){
    this.router.navigate(['reviews/les'],{relativeTo:this.route});
    this.navigated=!this.navigated;
  }
}
