import { Component, computed, ElementRef, inject, OnInit, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { ColorTheoryService } from './services/color-theory.service';
import { DadenHeaderComponent } from "../../shared/components/daden-header/daden-header.component";
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
import { SliderType } from "../../shared/components/helper-types/helper-types";
import gsap from 'gsap';
import { DadenInputColorspectrumComponent } from "../../shared/components/daden-input-colorspectrum/daden-input-colorspectrum.component";

@Component({
  selector: 'app-section-colortheory',
  imports: [
    DadenHeaderComponent,
    DadenHeaderComponent,
    DadenDropdownComponent,
    DadenInputColorspectrumComponent,
  ],
  templateUrl: './section-colortheory.component.html',
  styleUrl: './section-colortheory.component.scss'
})
export class SectionColortheoryComponent implements OnInit {

  colorTheoryService = inject(ColorTheoryService);

  @ViewChild('hueSlider1', { static: false }) hueSlider1!: ElementRef;
  @ViewChild('satSlider', { static: false }) satSlider1!: ElementRef;
  @ViewChild('tintSlider', { static: false }) tintSlider1!: ElementRef;

  getArchetypeColorinformation = signal<any>({});
  getArchetypeColorinfoDropdown = signal<any>([]);

  hueMinValue = signal<number>(0);
  hueMaxValue = signal<number>(360);
  hueColorGraden = signal<number>(0);
  satMinValue = signal<number>(0);
  satMaxValue = signal<number>(100);
  satColorGraden = signal<number>(0);

  tintMinValue = signal<number>(0);
  tintMaxValue = signal<number>(100);
  tintColorGraden = signal<number>(0);

  hueMinValue2 = signal<number>(0);
  hueMaxValue2 = signal<number>(360);
  hueColorGraden2 = signal<number>(0);

  hueSlider: SliderType = "hue";
  satSlider: SliderType = "saturation";
  tintSlider: SliderType = "lightness";

  labelHue = signal<string>("'Primary Hue (Recommended: Select an archetype)'");
  labelSat = signal<string>("");
  labelTint = signal<string>("");


  archeType1 = signal<string>("");
  archeType2 = signal<string>("");

  dropDownArchetypeConfig: DadenDropdown = {
    placeholder: "Select your archetype...",
    items: [],
    selectedItem: "",
    disabled: false,
  };

  sliderValue = signal(0);

  @ViewChildren(DadenInputColorspectrumComponent) sliderHandles!: QueryList<DadenInputColorspectrumComponent>;

  // @ViewChild(DadenInputColorspectrumComponent) hueSliderHandle!: DadenInputColorspectrumComponent;
  // @ViewChild(DadenInputColorspectrumComponent) satSliderHandle!: DadenInputColorspectrumComponent;
  // @ViewChild(DadenInputColorspectrumComponent) tintSliderHandle!: DadenInputColorspectrumComponent;

  ngAfterViewInit() {
    // if (this.satSliderHandle?.hueSlider?.nativeElement
    //   && this.tintSliderHandle?.tintSlider?.nativeElement
    //   && this.satSliderHandle?.satSlider?.nativeElement) { this.updateSliderGradients()};
    this.sliderHandles.forEach(slider => {
      slider.sliders.forEach(sliderElement => {
        if (sliderElement?.nativeElement) {
          const h = this.hueColorGraden();
          sliderElement.nativeElement.style.setProperty("--current-hue", h);
        } else {
          console.error("Slider element not found!", sliderElement);
        }
      });
    });
  }

  ngOnInit(): void {
    this.colorTheoryService.loadArchetypeColorDetail().subscribe((data) => {
      this.getArchetypeColorinformation.set(data);
    });
    this.colorTheoryService.loadArchetypeDropdown().subscribe((data) => {
      this.dropDownArchetypeConfig.items = data.archetypesColorinfo;
    });
  }

  check() {
    console.log(this.getArchetypeColorinformation(), " <---- COLORINFO DETAILS");
  }

  handleDropdownArchetype(archetype: string) {
    this.archeType1.set(archetype);
    this.updateHSLSliders();
    // console.log(this.archeType1(), " JA check");
  }

  handleDropdownSecundaryArchetype(archetype: string) {
    this.archeType2.set(archetype);
    // console.log(this.archeType2(), " JA check Secondary");
  }

  private getMappedKey(archetype: string): string {
    return archetype.split(" (")[0].trim().toLowerCase();
  }





  updateHSLSliders() {
    const archetypes = [this.archeType1(), this.archeType2()];
    archetypes.forEach(archetype => {
      if (archetype) {
        const mappedKey = this.getMappedKey(archetype);
        const archetypeData = this.getArchetypeColorinformation()?.archetypesColorInformation[mappedKey];

        if (archetypeData) {
          const { hueMin, hueMax, center } = archetypeData;
          this.hueColorGraden.set(center);
          this.labelHue.set(`Primary Hue (Recommended: ${hueMin}-${hueMax}% )`);
          this.hueSlider1.nativeElement.style.left = `${(hueMin / 360) * 100}%`;
          this.hueSlider1.nativeElement.style.width = `${((hueMax - hueMin) / 360) * 100}%`;
        }

        console.log(archetypeData, " <--- ARCHETYPEDATA!!");
      }
    });
  }
}