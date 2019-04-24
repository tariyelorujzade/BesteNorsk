import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCleaner]'
})
export class CleanerDirective {
  el:HTMLElement;

  constructor(el:ElementRef) {
  this.el=el.nativeElement;
   }

  @HostBinding('class.active') active:string;
 // @HostBinding('')

  @HostListener('mouseleave') mouseOver(){
    if( this.el.classList.contains('active')){
      // this.el.style.borderBottom='5px solid red';
    }else{
     // this.el.style.borderTop='5px solid blue';
    }

  }
  @HostListener('mouseenter') mouseLeave(){
    if(this.el.classList.contains('active')){
     // this.el.style.borderBottom='5px solid transparent';
    }

  }

}
