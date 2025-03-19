import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';
import { DadenLabelComponent } from '../../shared/atoms/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/atoms/daden-detail/daden-detail.component';
import { DadenInputComponent } from '../../shared/atoms/daden-input/daden-input.component';

@Component({
  selector: 'app-section-copywriting',
  templateUrl: './section-copywright.component.html',
  standalone: true,
  imports: [DadenHeaderComponent, FormsModule, DadenPageFooterComponent, DadenGroupHeaderComponent, DadenLabelComponent, DadenDetailComponent, DadenInputComponent ], // Required for ngModel
})
export class SectionCopywrightComponent implements OnInit {
  aboutUsText: string = '';
  productDescriptionText: string = '';
  ctaText: string = '';

  // Mocked data from other components
  private brandName: string = 'Awesome Co.';
  private tagline: string = 'Unleash the Fun!';
  private messaging = {
    problem: 'Boring days with nothing to do.',
    solution: 'Exciting products to brighten your life.',
    benefit: 'Endless joy and entertainment.',
  };
  private tone = {
    formality: 20, // Casual
    playfulness: 80, // Playful
    respect: 40, // Slightly irreverent
    emotion: 60, // Somewhat enthusiastic
  };

  constructor() {}

  ngOnInit(): void {
    this.generateInitialCopy();
  }

  generateInitialCopy(): void {
    // Generate initial copy based on brand inputs and tone
    this.aboutUsText = this.generateAboutUs();
    this.productDescriptionText = this.generateProductDescription();
    this.ctaText = this.generateCTA();
  }

  private generateAboutUs(): string {
    let text = `Hey there! We’re ${this.brandName}, and we’re all about ${this.tagline.toLowerCase()}. `;
    if (this.tone.formality < 30) {
      text += `We started ‘cause we were sick of ${this.messaging.problem.toLowerCase()} `;
    } else if (this.tone.formality > 70) {
      text += `Our mission addresses ${this.messaging.problem.toLowerCase()} `;
    } else {
      text += `${this.messaging.problem} was a drag, so we stepped in. `;
    }
    text += this.tone.playfulness > 70 ? 'with some wild, crazy vibes!' : 'with a solid fix.';
    return text;
  }

  private generateProductDescription(): string {
    let text = '';
    if (this.tone.playfulness > 70) {
      text += 'Buckle up for something awesome! ';
    } else if (this.tone.playfulness < 30) {
      text += 'Here’s what we offer: ';
    } else {
      text += 'Check this out: ';
    }
    text += `${this.messaging.solution} It’s all about ${this.messaging.benefit.toLowerCase()}`;
    text += this.tone.emotion > 70 ? '—we’re totally pumped about it!' : '.';
    return text;
  }

  private generateCTA(): string {
    let text = '';
    if (this.tone.respect < 30) {
      text += 'Screw the boring stuff—';
    } else if (this.tone.respect > 70) {
      text += 'We warmly invite you to ';
    } else {
      text += 'Why not ';
    }
    text += this.tone.emotion > 70 ? 'jump in and grab some fun NOW!' : 'try it out today?';
    return text;
  }

  updateCopy(): void {
    // Optionally regenerate copy dynamically based on tone if desired
    // For now, user edits are preserved unless they reset
  }

  // Mocked method to simulate fetching data from other components
  private getBrandData(): void {
    // In a real app, this would fetch from a service or parent component
    this.brandName = 'Awesome Co.';
    this.tagline = 'Unleash the Fun!';
    this.messaging = {
      problem: 'Boring days with nothing to do.',
      solution: 'Exciting products to brighten your life.',
      benefit: 'Endless joy and entertainment.',
    };
    this.tone = {
      formality: 20,
      playfulness: 80,
      respect: 40,
      emotion: 60,
    };
  }
}