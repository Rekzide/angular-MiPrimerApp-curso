import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  @Input('subrayado') config: any;
  @HostBinding('class') isHover: string;


  constructor(private elem: ElementRef,private renderer: Renderer2) {
      //elem.nativeElement.style.textDecoration = 'underline';
      this.config = {
        colorHover: 'green',
        colorNoHover: 'red'
      }
      this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
      this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
   }

   @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorHover);
    this.isHover = 'hover';
   }

   @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.isHover = 'noHover';
   }

}
