import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement,"margin","30px 30px");
    this.renderer.setStyle(this.element.nativeElement,"padding","5px 10px");
    this.renderer.setStyle(this.element.nativeElement,"transition","0.5s");
    this.renderer.setStyle(this.element.nativeElement,"border","1px solid red");
    this.renderer.setStyle(this.element.nativeElement,"background","teal");
    this.renderer.setStyle(this.element.nativeElement,"color","white");

  }
}
