import { Component, inject, OnInit, signal } from '@angular/core';
import { ColorTheoryService } from './services/color-theory.service';
import { DadenHeaderComponent } from "../../shared/components/daden-header/daden-header.component";
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
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

  hueMaxVal = signal<number>(0);
  hueMinVal = signal<number>(0);
  hueCenterVal = signal<number>(0);

  hueVal = signal<number>(40);
  satVal = signal<number>(50);
  tintVal = signal<number>(55);

  archeType1 = signal<string>("");
  archeType2 = signal<string>("");

  getArchetypeColorinformation = signal<any>({});
  getArchetypeColorinfoDropdown = signal<any>([]);

  labelHue = signal<string>("");
  labelSat = signal<string>("");
  labelTint = signal<string>("");

  dropDownArchetypeConfig: DadenDropdown = {
    placeholder: "Select your archetype...",
    items: [],
    selectedItem: "",
    disabled: false,
  };

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
    const selectedArchetype = this.archeType1();
    if (selectedArchetype) {
      const mappedKey = this.getMappedKey(archetype);
      const archetypeData = this.getArchetypeColorinformation()?.archetypesColorInformation[mappedKey];
      if (archetypeData) {
        const { hueMin, hueMax, center } = archetypeData;
        this.hueMaxVal.set(hueMax);
        this.hueMinVal.set(hueMin);
        this.hueCenterVal.set(center);
        this.labelHue.set(`Primary Hue (Recommended: ${hueMin}-${hueMax}% )`);
       this.hueVal.set(center);
      }
      console.log(archetypeData, " <--- ARCHETYPEDATA!!");
    }
  }

  handleDropdownSecundaryArchetype(archetype: string) {
    this.archeType2.set(archetype);
  }

  private getMappedKey(archetype: string): string {
    return archetype.split(" (")[0].trim().toLowerCase();
  }
}