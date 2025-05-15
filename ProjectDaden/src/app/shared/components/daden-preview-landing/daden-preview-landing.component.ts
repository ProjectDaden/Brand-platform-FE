import { Component, ElementRef, Input, OnInit, Renderer2, Signal, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'daden-preview-landing',
  templateUrl: './daden-preview-landing.component.html',
  styleUrl: './daden-preview-landing.component.scss',
  standalone: true,
  imports: [],
})
export class DadenPreviewLandingComponent implements OnInit, AfterViewInit {
  @Input() brandnamePreview!: Signal<{ brandname: string; tagline?: string }>;
  
  private targetWidth = 1280;
  private resizeListener: () => void;
  private hamburgerListener: (() => void) | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.resizeListener = this.debounce(() => this.updateScale(), 100);
  }

  ngOnInit() {
    if (!this.brandnamePreview) {
      console.warn('brandnamePreview input is not provided');
    }
  }

  ngAfterViewInit() {
    this.updateScale();
    window.addEventListener('resize', this.resizeListener);

    const hamburgerBtn = this.el.nativeElement.querySelector('#hamburger-btn');
    const navMenu = this.el.nativeElement.querySelector('#nav-menu');

    if (hamburgerBtn && navMenu) {
      this.hamburgerListener = this.renderer.listen(hamburgerBtn, 'click', () => {
        const isHidden = navMenu.classList.contains('hidden');
        if (isHidden) {
          this.renderer.removeClass(navMenu, 'hidden');
        } else {
          this.renderer.addClass(navMenu, 'hidden');
        }
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
    if (this.hamburgerListener) {
      this.hamburgerListener();
    }
  }

  private updateScale() {
    const container = this.el.nativeElement.parentElement;
    const body = this.el.nativeElement.querySelector('.body');

    if (container && body) {
      const containerWidth = container.clientWidth;
      const scale = containerWidth / this.targetWidth;

      this.renderer.setStyle(body, 'transform', `scale(${scale})`);
      this.renderer.setStyle(body, 'width', `${this.targetWidth}px`);
      this.renderer.setStyle(body, 'transform-origin', 'top left');
      this.renderer.setStyle(body, 'height', 'auto');

      const containerHeight = container.clientHeight;
      const maxHeight = containerHeight / scale;
      this.renderer.setStyle(body, 'max-height', `${maxHeight}px`);
    }
  }

  private debounce(func: Function, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
}

