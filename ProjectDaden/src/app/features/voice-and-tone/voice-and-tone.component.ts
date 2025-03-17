import { Component, OnInit } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenContainerComponent } from '../../shared/atoms/daden-container/daden-container.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';

@Component({
  selector: 'app-voice-and-tone',
  imports: [DadenHeaderComponent, DadenContainerComponent, DadenPageFooterComponent],
  templateUrl: './voice-and-tone.component.html',
  styleUrls: ['./voice-and-tone.component.scss'],
  standalone: true,
})
export class VoiceAndToneComponent implements OnInit {
  formality: number = 50; // Default: Neutral
  playfulness: number = 50; // Default: Neutral
  respect: number = 50; // Default: Neutral
  emotion: number = 50; // Default: Neutral

  constructor() {}

  ngOnInit(): void {
    // Set initial slider positions based on Personality from Brand Values
    this.setInitialToneFromPersonality();
  }

  handleSliderChange(event: Event, attribute: string): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    switch (attribute) {
      case 'formality':
        this.formality = value;
        break;
      case 'playfulness':
        this.playfulness = value;
        break;
      case 'respect':
        this.respect = value;
        break;
      case 'emotion':
        this.emotion = value;
        break;
    }
  }

  private setInitialToneFromPersonality(): void {
    const personality = this.getPersonalityFromBrandValues(); // Mocked
    switch (personality) {
      case 'Jester':
        this.formality = 20; // More casual
        this.playfulness = 80; // Very playful
        this.respect = 40; // Slightly irreverent
        this.emotion = 60; // Somewhat enthusiastic
        break;
      case 'Sage':
        this.formality = 80; // More professional
        this.playfulness = 20; // Serious
        this.respect = 90; // Very respectful
        this.emotion = 40; // More matter-of-fact
        break;
      case 'Creator':
        this.formality = 50; // Balanced
        this.playfulness = 60; // Slightly playful
        this.respect = 70; // Respectful
        this.emotion = 70; // Enthusiastic
        break;
      default:
        // Leave defaults as-is for unknown personalities
        break;
    }
  }

  getTonePreview(): string {
    // Generate a dynamic preview based on slider values
    let toneSample = 'Welcome to our brand! ';

    // Formality
    if (this.formality < 30) {
      toneSample += 'Hey, we’re super chill and laid-back. ';
    } else if (this.formality > 70) {
      toneSample += 'We are delighted to present our professional services. ';
    } else {
      toneSample += 'We’re glad you’re here with us. ';
    }

    // Playfulness
    if (this.playfulness > 70) {
      toneSample += 'Ready for some fun and wacky adventures? ';
    } else if (this.playfulness < 30) {
      toneSample += 'Let’s get straight to the point. ';
    } else {
      toneSample += 'Let’s dive in and see what’s up! ';
    }

    // Respect
    if (this.respect < 30) {
      toneSample += 'Rules? Who needs ‘em! ';
    } else if (this.respect > 70) {
      toneSample += 'We honor your presence with the utmost respect. ';
    } else {
      toneSample += 'We’re cool with you, no worries. ';
    }

    // Emotion
    if (this.emotion > 70) {
      toneSample += 'OMG, we’re SO excited to meet you!!!';
    } else if (this.emotion < 30) {
      toneSample += 'Here’s the info you need.';
    } else {
      toneSample += 'We’re happy to share this with you!';
    }

    return toneSample;
  }

  private getPersonalityFromBrandValues(): string {
    return 'Jester'; // Mocked; replace with actual logic to fetch from Brand Values
  }
}