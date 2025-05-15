import { computed, inject, Injectable } from '@angular/core';
import { BrandNameService } from '../../brand-name/services/brand-name.service';
import { BrandNameTaglineStore } from '../../brand-name/store/brandname-tagline.store';

@Injectable({
  providedIn: 'root'
})
export class AsidePreviewService {

  brandNameTaglineService = inject(BrandNameTaglineStore);

  //  readonly brandnamePreview = this.brandNameTaglineService.
     readonly brandnameTaglineState = computed(() => ({
       brandname: this.brandNameTaglineService.brandname(),
       tagline: this.brandNameTaglineService.tagline(),
     }));

  constructor() { }
}
