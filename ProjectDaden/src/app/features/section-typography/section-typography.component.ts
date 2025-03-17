import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';

@Component({
  selector: 'app-section-typography',
  imports: [
    DadenDropdownComponent,
    DadenHeaderComponent, 
    DadenPageFooterComponent,
    DadenGroupHeaderComponent
  ],
  templateUrl: './section-typography.component.html',
  styleUrl: './section-typography.component.scss',
  standalone: true,
})
export class SectionTypographyComponent implements OnInit{
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit() {
    // Pre-select personality and load fonts on initialization
    this.selectedPersonality = this.getPersonalityFromBrandValues();
    this.loadFontsBasedOnPersonality(this.selectedPersonality);
  }

  personalityOptions: string[] = [
    'Everyman',
    'Hero',
    'Caregiver',
    'Explorer',
    'Creator',
    'Innocent',
    'Sage',
    'Jester',
    'Magician',
    'Rebel',
    'Ruler',
    'Lover',
  ];

  typographyOptions = {
    headingFonts: [] as string[],
    bodyFonts: [] as string[],
    typeScales: [
      { 
        name: '1.067 - Minor Second', 
        value: { 
          h1: '1.29rem',
          h2: '1.21rem',
          h3: '1.14rem',
          h4: '1.07rem',
          h5: '1rem',
          h6: '0.94rem',
          body: '1rem',
          small: '0.94rem',
          detail: '0.88rem'
        } 
      },
      { 
        name: '1.125 - Major Second', 
        value: { 
          h1: '1.60rem',
          h2: '1.42rem',
          h3: '1.27rem',
          h4: '1.13rem',
          h5: '1rem',
          h6: '0.89rem',
          body: '1rem',
          small: '0.89rem',
          detail: '0.79rem'
        } 
      },
      { 
        name: '1.2 - Minor Third', 
        value: { 
          h1: '2.07rem',
          h2: '1.73rem',
          h3: '1.44rem',
          h4: '1.20rem',
          h5: '1rem',
          h6: '0.83rem',
          body: '1rem',
          small: '0.83rem',
          detail: '0.69rem'
        } 
      },
      { 
        name: '1.25 - Major Third', 
        value: { 
          h1: '2.44rem',
          h2: '1.95rem',
          h3: '1.56rem',
          h4: '1.25rem',
          h5: '1rem',
          h6: '0.80rem',
          body: '1rem',
          small: '0.80rem',
          detail: '0.64rem'
        } 
      },
      { 
        name: '1.33 - Perfect Fourth', 
        value: { 
          h1: '3.14rem',
          h2: '2.36rem',
          h3: '1.77rem',
          h4: '1.33rem',
          h5: '1rem',
          h6: '0.75rem',
          body: '1rem',
          small: '0.75rem',
          detail: '0.56rem'
        } 
      },
      { 
        name: '1.414 - Augmented Fourth', 
        value: { 
          h1: '4.00rem',
          h2: '2.83rem',
          h3: '2.00rem',
          h4: '1.41rem',
          h5: '1rem',
          h6: '0.71rem',
          body: '1rem',
          small: '0.71rem',
          detail: '0.50rem'
        } 
      },
      { 
        name: '1.5 - Perfect Fifth', 
        value: { 
          h1: '5.06rem',
          h2: '3.38rem',
          h3: '2.25rem',
          h4: '1.50rem',
          h5: '1rem',
          h6: '0.67rem',
          body: '1rem',
          small: '0.67rem',
          detail: '0.44rem'
        } 
      },
      { 
        name: '1.618 - Golden Ratio', 
        value: { 
          h1: '6.85rem',
          h2: '4.24rem',
          h3: '2.62rem',
          h4: '1.62rem',
          h5: '1rem',
          h6: '0.62rem',
          body: '1rem',
          small: '0.62rem',
          detail: '0.38rem'
        } 
      },
      { 
        name: '1.66 - Major Sixth', 
        value: { 
          h1: '7.60rem',
          h2: '4.58rem',
          h3: '2.76rem',
          h4: '1.66rem',
          h5: '1.00rem',
          h6: '0.60rem',
          body: '1rem',
          small: '0.60rem',
          detail: '0.36rem'
        } 
      },
      {
        name: '4px Grid - Linear',
        value: {
          h1: '3rem',
          h2: '2.5rem',
          h3: '2rem',
          h4: '1.75rem',
          h5: '1.5rem',
          h6: '1.25rem',
          body: '1rem',
          small: '0.875rem',
          detail: '0.75rem'
        }
      },
      {
        name: '8px Grid - Standard',
        value: {
          h1: '4rem',
          h2: '3.5rem',
          h3: '3rem',
          h4: '2.5rem',
          h5: '2rem',
          h6: '1.5rem',
          body: '1rem',
          small: '0.875rem',
          detail: '0.75rem'
        }
      },
      {
        name: '4px Grid - Exponential',
        value: {
          h1: '4rem',
          h2: '3rem',
          h3: '2.25rem',
          h4: '1.75rem',
          h5: '1.5rem',
          h6: '1.25rem',
          body: '1rem',
          small: '0.875rem',
          detail: '0.75rem'
        }
      },
    ],
  };

  typeScaleNames: string[] = this.typographyOptions.typeScales.map(scale => scale.name);

  selectedPersonality: string = '';
  selectedHeadingFont: string = '';
  selectedBodyFont: string = '';
  typeScale = { 
    h1: '2.986rem', 
    h2: '2.488rem', 
    h3: '2.074rem', 
    h4: '1.728rem', 
    h5: '1.44rem', 
    h6: '1.2rem', 
    body: '1rem', 
    small: '0.833rem',
    detail: '0.694rem' 
  }; // Default: 1.2 Minor Third

  handlePersonalitySelection(personality: string) {
    this.selectedPersonality = personality;
    this.loadFontsBasedOnPersonality(personality);
  }

  loadFontsBasedOnPersonality(personality: string) {
    let headingFonts: string[];
    let bodyFonts: string[];

    switch (personality) {
      case 'Jester':
        headingFonts = ['Bangers', 'Fredoka One', 'Luckiest Guy'];
        bodyFonts = ['Comic Neue', 'Roboto', 'Open Sans'];
        break;
      case 'Creator':
        headingFonts = ['Montserrat', 'Playfair Display', 'Raleway'];
        bodyFonts = ['Lato', 'Source Sans Pro', 'Poppins'];
        break;
      case 'Hero':
        headingFonts = ['Oswald', 'Anton', 'Impact'];
        bodyFonts = ['Roboto', 'Arial', 'Helvetica'];
        break;
      case 'Caregiver':
        headingFonts = ['Lora', 'Merriweather', 'Georgia'];
        bodyFonts = ['Open Sans', 'Poppins', 'Source Sans Pro'];
        break;
      case 'Explorer':
        headingFonts = ['Fjalla One', 'Patua One', 'Cabin'];
        bodyFonts = ['Lato', 'Roboto', 'Montserrat'];
        break;
      case 'Innocent':
        headingFonts = ['Pacifico', 'Lobster', 'Dancing Script'];
        bodyFonts = ['Open Sans', 'Lora', 'Comic Neue'];
        break;
      case 'Sage':
        headingFonts = ['Times New Roman', 'Garamond', 'Libre Baskerville'];
        bodyFonts = ['Georgia', 'Merriweather', 'Source Serif Pro'];
        break;
      case 'Magician':
        headingFonts = ['Cinzel', 'UnifrakturMaguntia', 'Alegreya'];
        bodyFonts = ['Lato', 'Roboto', 'Poppins'];
        break;
      case 'Rebel':
        headingFonts = ['Bebas Neue', 'Staatliches', 'Oswald'];
        bodyFonts = ['Arial', 'Helvetica', 'Roboto'];
        break;
      case 'Ruler':
        headingFonts = ['Playfair Display', 'Cormorant Garamond', 'Old Standard TT'];
        bodyFonts = ['Georgia', 'Times New Roman', 'Lora'];
        break;
      case 'Everyman':
        headingFonts = ['Inter', 'Roboto Slab', 'Bitter', 'Arvo'];
        bodyFonts = ['Inter', 'Open Sans', 'Lato', 'Source Sans Pro'];
        break;
      case 'Lover':
        headingFonts = ['Great Vibes', 'Sacramento', 'Parisienne'];
        bodyFonts = ['Lora', 'Merriweather', 'Open Sans'];
        break;
      default:
        headingFonts = ['Roboto', 'Arial', 'Helvetica'];
        bodyFonts = ['Open Sans', 'Lora', 'Merriweather'];
    }

    // Update typography options
    this.typographyOptions.headingFonts = headingFonts;
    this.typographyOptions.bodyFonts = bodyFonts;

    // Set the first font of each list as the selected font
    this.selectedHeadingFont = headingFonts[0];
    this.selectedBodyFont = bodyFonts[0];

    // Load the fonts dynamically
    const allFonts = [...new Set([...headingFonts, ...bodyFonts])]; // Remove duplicates
    this.loadGoogleFonts(allFonts);
  }

  private loadGoogleFonts(fonts: string[]) {
    // Remove existing Google Fonts link if it exists
    const existingLink = this.document.getElementById('google-fonts-link');
    if (existingLink) {
      this.renderer.removeChild(this.document.head, existingLink);
    }

    // Format fonts for Google Fonts API (modern syntax)
    const formattedFonts = fonts
      .map(font => `family=${encodeURIComponent(font)}:wght@400;700`)
      .join('&');
    const fontUrl = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;

    // Create and append the link element
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'id', 'google-fonts-link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', fontUrl);
    this.renderer.appendChild(this.document.head, link);
  }

  handleFontSelection(event: string, type: 'heading' | 'body') {
    if (type === 'heading') {
      this.selectedHeadingFont = event;
    } else {
      this.selectedBodyFont = event;
    }
  }

  handleTypeScaleSelection(selectedName: string) {
    const selectedScale = this.typographyOptions.typeScales.find(scale => scale.name === selectedName);
    this.typeScale = selectedScale ? selectedScale.value : this.typeScale;
  }

  private getPersonalityFromBrandValues(): string {
    return 'Everyman'; // Mocked; replace with actual logic
  }
}