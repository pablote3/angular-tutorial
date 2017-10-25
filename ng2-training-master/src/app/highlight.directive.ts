import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover')
  mouseOver() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseout')
  MouseOut() {
    this.el.nativeElement.style.backgroundColor = ''
  }
}
