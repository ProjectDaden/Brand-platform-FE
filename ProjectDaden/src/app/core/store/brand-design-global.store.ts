import { BrandNameAndTaglineCompleted } from './../../features/brand-name/store/brandname-tagline.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { BrandDesignCompleted } from './brand-design.model';
import { initialColorPickerTheme } from '../../features/tool-color-picker/store/coloringTheme.store';
import { initialBrandnameAndTagline } from '../../features/brand-name/store/brandname-tagline.store';
import { initialIndustryAndValues } from '../../features/brand-value-personality/store/industry-industry.store';
import { initialTargetAudienceState } from '../../features/target-audience/store/target-audience.store';
import { initialVisionAndMissions } from '../../features/mission-vision/store/vision-and-missions.store';
import { initialToneOfVoice } from '../../features/voice-and-tone/store/tone-of-voice.store';
import { initialMessagingTone } from '../../features/section-messaging/store/messaging-tone.store';
import { initialCopywriting } from '../../features/section-copywright/store/copywriting.store';
import { InitialLogoSection } from '../../features/section-logo/store/logo-section.store';
import { initialTypographySection } from '../../features/section-typography/store/typography-section.store';
import { InitialImagerySection } from '../../features/section-imagery/store/imagery-section.store';
import { Injectable } from '@angular/core';
import { IndustryAndValuesCompleted } from '../../features/brand-value-personality/store/industry-industry.model';
import { TargetAudienceCompleted } from '../../features/target-audience/store/target-audience.model';
import { VisionAndMissionsCompleted } from '../../features/mission-vision/store/vision-and-missions.model';
import { ToneOfVoiceCompleted } from '../../features/voice-and-tone/store/tone-of-voice.model';
import { MessagingToneCompleted } from '../../features/section-messaging/store/messaging-tone.model';
import { CopywritingCompleted } from '../../features/section-copywright/store/copywriting.model';
import { LogoSectionCompleted } from '../../features/section-logo/store/logo-section.model';
import { ColorPickerThemeCompleted } from '../../features/tool-color-picker/store/coloringTheme.model';
import { TypographyCompleted } from '../../features/section-typography/store/typography-section.model';
import { ImagerySectionCompleted } from '../../features/section-imagery/store/imagery-section.model';

type GlobalFlowState = BrandDesignCompleted;

export const initialBrandDesignGlobalFlowState: GlobalFlowState = {
  brandnameAndTagline: initialBrandnameAndTagline,
  industryAndValues: initialIndustryAndValues,
  targetAudience: initialTargetAudienceState,
  missionAndVision: initialVisionAndMissions,
  toneOfVoice: initialToneOfVoice,
  messagingTone: initialMessagingTone,
  copyWriting: initialCopywriting,
  logoDesign: InitialLogoSection,
  colorPalette: initialColorPickerTheme,
  typography: initialTypographySection,
  imagery: InitialImagerySection,
};

export const globalStore = signalStore(
  { providedIn: 'root' },
  withState<GlobalFlowState>(initialBrandDesignGlobalFlowState),
  withMethods((store) => ({
    updateGlobalBrandnameTaglineState(newState: BrandNameAndTaglineCompleted) {
      patchState(store, (state) => ({
        brandnameAndTagline: {
          ...state.brandnameAndTagline,
          brandnameAndTagline: newState,
        },
      }));
      console.log('GlobalStore!!', store.brandnameAndTagline());
    },
    updateGlobalIndustryAndValuesState(newState: IndustryAndValuesCompleted) {
        patchState(store, (state) => ({
          industryAndValues: {
            ...state.industryAndValues,
            industryAndValues: newState,
          },
        }));
        console.log('GlobalStore!!', store.industryAndValues());
      },
      updateGlobalTargetAudienceState(newState: TargetAudienceCompleted) {
        patchState(store, (state) => ({
          targetAudience: {
            ...state.targetAudience,
            targetAudience: newState,
          },
        }));
        console.log('GlobalStore!!', store.targetAudience());
      },
      updateGlobalVisionAndMissionState(newState: VisionAndMissionsCompleted) {
        patchState(store, (state) => ({
            missionAndVision: {
            ...state.missionAndVision,
            missionAndVision: newState,
          },
        }));
        console.log('GlobalStore!!', store.missionAndVision());
      },
      updateGlobalToneOfVoiceState(newState: ToneOfVoiceCompleted) {
        patchState(store, (state) => ({
            toneOfVoice: {
            ...state.toneOfVoice,
            toneOfVoice: newState,
          },
        }));
        console.log('GlobalStore!!', store.toneOfVoice());
      },
      updateGlobalMessagingToneState(newState: MessagingToneCompleted) {
        patchState(store, (state) => ({
            messagingTone: {
            ...state.messagingTone,
            messagingTone: newState,
          },
        }));
        console.log('GlobalStore!!', store.messagingTone());
      },
      updateGlobalCopyWritingState(newState: CopywritingCompleted) {
        patchState(store, (state) => ({
            copyWriting: {
            ...state.copyWriting,
            copyWriting: newState,
          },
        }));
        console.log('GlobalStore!!', store.copyWriting());
      },
      updateGlobalLogoDesignState(newState: LogoSectionCompleted) {
        patchState(store, (state) => ({
            logoDesign: {
            ...state.logoDesign,
            logoDesign: newState,
          },
        }));
        console.log('GlobalStore!!', store.logoDesign());
      },
      updateGlobalColorPaletteState(newState: ColorPickerThemeCompleted) {
        patchState(store, (state) => ({
            colorPalette: {
            ...state.colorPalette,
            colorPalette: newState,
          },
        }));
        console.log('GlobalStore!!', store.colorPalette());
      },
      updateGlobalTypographyState(newState: TypographyCompleted) {
        patchState(store, (state) => ({
            typography: {
            ...state.typography,
            typography: newState,
          },
        }));
        console.log('GlobalStore!!', store.typography());
      },
      updateGlobalImageryState(newState: ImagerySectionCompleted) {
        patchState(store, (state) => ({
            imagery: {
            ...state.imagery,
            imagery: newState,
          },
        }));
        console.log('GlobalStore!!', store.imagery());
      },
  }))
);

@Injectable({ providedIn: 'root' })
export class BaseClassGlobalStore extends globalStore {
  constructor() {
    super();
  }

  override updateGlobalBrandnameTaglineState = (newState: BrandNameAndTaglineCompleted): void => super.updateGlobalBrandnameTaglineState(newState);
  override updateGlobalIndustryAndValuesState = (newState: IndustryAndValuesCompleted): void => super.updateGlobalIndustryAndValuesState(newState);
  override updateGlobalTargetAudienceState = (newState: TargetAudienceCompleted): void => super.updateGlobalTargetAudienceState(newState);
  override updateGlobalVisionAndMissionState = (newState: VisionAndMissionsCompleted): void => super.updateGlobalVisionAndMissionState(newState);
  override updateGlobalToneOfVoiceState = (newState: ToneOfVoiceCompleted): void => super.updateGlobalToneOfVoiceState(newState);
  override updateGlobalMessagingToneState = (newState: MessagingToneCompleted): void => super.updateGlobalMessagingToneState(newState);
  override updateGlobalCopyWritingState = (newState: CopywritingCompleted): void => super.updateGlobalCopyWritingState(newState);
  override updateGlobalLogoDesignState = (newState: LogoSectionCompleted): void => super.updateGlobalLogoDesignState(newState);
  override updateGlobalColorPaletteState = (newState: ColorPickerThemeCompleted): void => super.updateGlobalColorPaletteState(newState);
  override updateGlobalTypographyState = (newState: TypographyCompleted): void => super.updateGlobalTypographyState(newState);
  override updateGlobalImageryState = (newState: ImagerySectionCompleted): void => super.updateGlobalImageryState(newState);

  getStore(){
    console.log(initialBrandDesignGlobalFlowState, " Current initial global state!");
  }
}
