import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'daden-color-picker',
  templateUrl: './daden-color-picker.component.html',
  standalone: true
})

export class DadenColorPickerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('colorWheelCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  canvasSize: number = 300; // Default size, updated dynamically
  canvasRendered: boolean = false;
  selectedColor = {
    hue: 0,
    saturation: 70,
    lightness: 50,
    rgb: 'rgb(128, 128, 128)', // Default gray
    hsl: 'HSL: (0°, 70%, 50%)'
  };
  private resizeObserver: ResizeObserver | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');
    if (!context) {
      console.error('Failed to get 2D canvas context');
      return;
    }
    this.ctx = context;
    this.canvasRendered = true;
    this.cdr.detectChanges();

    // Set initial size and observe container resizing
    this.updateCanvasSize();
    this.setupResizeObserver();
    requestAnimationFrame(() => this.drawColorWheel());
    this.setupClickListener();
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private updateCanvasSize(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (!parent) return;

    const { width, height } = parent.getBoundingClientRect();
    // Use the smaller dimension to maintain square aspect ratio
    this.canvasSize = Math.min(width, height, window.innerHeight);
    canvas.width = this.canvasSize;
    canvas.height = this.canvasSize;
    this.cdr.detectChanges();
    requestAnimationFrame(() => this.drawColorWheel());
  }

  private setupResizeObserver(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (!parent) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.updateCanvasSize();
    });
    this.resizeObserver.observe(parent);
  }

  private hslToRgb(h: number, s: number, l: number): string {
    h = ((h % 360) + 360) % 360;
    s = Math.max(0, Math.min(100, s));
    l = Math.max(0, Math.min(100, l));

    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgb(${r}, ${g}, ${b})`;
  }

  private drawColorWheel(): void {
    try {
      const radius = this.canvasSize / 2;
      const imageData = this.ctx.createImageData(this.canvasSize, this.canvasSize);
      const data = imageData.data;
      const segmentAngle = 30; // 12 segments
      const bandCount = 5; // 5 radial bands
      const bandWidth = radius / bandCount;

      for (let y = 0; y < this.canvasSize; y++) {
        for (let x = 0; x < this.canvasSize; x++) {
          const dx = x - radius;
          const dy = y - radius;
          const distance = Math.sqrt(dx * dx + dy * dy);
          let angle = Math.atan2(dy, dx) * 180 / Math.PI;
          if (angle < 0) angle += 360;

          if (distance <= radius) {
            const index = (y * this.canvasSize + x) * 4;
            const hue = angle;
            const saturation = 70;
            const lightness = 50;

            // Check for segment boundary
            const segmentIndex = Math.floor(angle / segmentAngle);
            const segmentBoundary = (segmentIndex + 1) * segmentAngle;
            const angleToBoundary = Math.min(angle % segmentAngle, segmentAngle - (angle % segmentAngle));
            const isSegmentBoundary = angleToBoundary < 1 || Math.abs(angle - segmentBoundary) < 1;

            // Check for radial band boundary
            const bandIndex = Math.floor(distance / bandWidth);
            const isBandBoundary = Math.abs(distance - (bandIndex + 1) * bandWidth) < 1;

            if (isSegmentBoundary || (isBandBoundary && bandIndex < bandCount - 1)) {
              // Draw white lines
              data[index] = 255;
              data[index + 1] = 255;
              data[index + 2] = 255;
              data[index + 3] = 255;
              continue;
            }

            const rgb = this.hslToRgb(hue, saturation, lightness);
            const match = rgb.match(/rgb\((\d+), (\d+), (\d+)\)/);
            if (!match) {
              console.warn(`Invalid RGB at x:${x}, y:${y}`);
              data[index] = 0;
              data[index + 1] = 0;
              data[index + 2] = 0;
              data[index + 3] = 255;
              continue;
            }
            data[index] = parseInt(match[1]);
            data[index + 1] = parseInt(match[2]);
            data[index + 2] = parseInt(match[3]);
            data[index + 3] = 255;
          }
        }
      }

      this.ctx.putImageData(imageData, 0, 0);
    } catch (error) {
      console.error('Error drawing color wheel:', error);
      this.canvasRendered = false;
      this.cdr.detectChanges();
    }
  }

  private setupClickListener(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.addEventListener('click', (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const radius = this.canvasSize / 2;
      const dx = x - radius;
      const dy = y - radius;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= radius) {
        let angle = Math.atan2(dy, dx) * 180 / Math.PI;
        if (angle < 0) angle += 360;

        const hue = angle;
        const saturation = 70;
        const lightness = 50;
        const rgb = this.hslToRgb(hue, saturation, lightness);
        this.selectedColor = {
          hue,
          saturation,
          lightness,
          rgb,
          hsl: `hsl(${Math.round(hue)}°, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`
        };
        this.cdr.detectChanges();
      }
    });
  }
}