import { Directive, HostBinding,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor() { }


  b:string;
  @Input() c:string='red';

  @HostListener("mouseenter") mouseover(){
    this.b= this.c;

  }
  @HostListener("mouseleave") mouseleave(){
    this.b='black';
  }

  @HostBinding('style.color') get setfontcolor()
  {
    return this.b;
  }
}
