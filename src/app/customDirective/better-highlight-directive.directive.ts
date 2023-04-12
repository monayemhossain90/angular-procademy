import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') background:string = "yellow";
  @HostBinding('style.border') border:string = " 1px solid green";
  @HostBinding('style.padding') padding:string = "10px 20px";
  @HostBinding('style.color') color:string = "red";

}
