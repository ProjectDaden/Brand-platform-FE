import { BrandNameAndTaglineCompleted, newBrandname } from '../../features/brand-name/store/brandname-tagline.model';
import { IndustryAndValuesCompleted } from '../../features/brand-value-personality/store/industry-industry.model';
import { VisionAndMissionsCompleted } from '../../features/mission-vision/store/vision-and-missions.model';
import { CopywritingCompleted } from '../../features/section-copywright/store/copywriting.model';
import { ImagerySectionCompleted } from '../../features/section-imagery/store/imagery-section.model';
import { LogoSectionCompleted } from '../../features/section-logo/store/logo-section.model';
import { MessagingToneCompleted } from '../../features/section-messaging/store/messaging-tone.model';
import { TypographyCompleted } from '../../features/section-typography/store/typography-section.model';
import { TargetAudienceCompleted } from '../../features/target-audience/store/target-audience.model';
import { ColorPickerThemeCompleted } from '../../features/tool-color-picker/store/coloringTheme.model';
import { ToneOfVoiceCompleted } from '../../features/voice-and-tone/store/tone-of-voice.model';

export type BrandDesignFlow =
    BrandNameAndTaglineCompleted &
    IndustryAndValuesCompleted &
    TargetAudienceCompleted &
    VisionAndMissionsCompleted &
    ToneOfVoiceCompleted &
    MessagingToneCompleted &
    CopywritingCompleted &
    LogoSectionCompleted &
    ColorPickerThemeCompleted &
    TypographyCompleted &
    ImagerySectionCompleted;
// Partial<PrintAndOfflineStyleCompleted> &
// Partial<SocialMediaStyleCompleted> &
// Partial<WebsiteAndUIStyleCompleted>

export type BrandDesignCompleted = {
  brandnameAndTagline: newBrandname;
  industryAndValues: IndustryAndValuesCompleted;
  targetAudience: TargetAudienceCompleted;
  missionAndVision: VisionAndMissionsCompleted;
  toneOfVoice: ToneOfVoiceCompleted;
  messagingTone: MessagingToneCompleted;
  copyWriting: CopywritingCompleted;
  logoDesign: LogoSectionCompleted;
  colorPalette: ColorPickerThemeCompleted;
  typography: TypographyCompleted;
  imagery: ImagerySectionCompleted;
};

export type TransformToBooleans<T> = {
  [K in keyof T]: T[K] extends string[] 
  ? boolean : T[K] extends object 
  ? TransformToBooleans<T[K]> : boolean; 
};
