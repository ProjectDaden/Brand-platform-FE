import { BrandNameAndTaglineCompleted } from "../../features/brand-name/store/brandname-tagline.model";
import { IndustryAndValuesCompleted } from "../../features/brand-value-personality/store/industry-and-value.model";
import { MissionVisionComponent } from "../../features/mission-vision/mission-vision.component";
import { CopywritingCompleted } from "../../features/section-copywright/store/copywriting.model";
import { ImagerySectionCompleted } from "../../features/section-imagery/store/imagery-section.model";
import { LogoSectionCompleted } from "../../features/section-logo/store/logo-section.model";
import { MessagingToneCompleted } from "../../features/section-messaging/store/messaging-tone.model";
import { TypographyCompleted } from "../../features/section-typography/store/typography-section.model";
import { TargetAudienceCompleted } from "../../features/target-audience/store/target-audience.model";
import { ColorPickerThemeCompleted } from "../../features/tool-color-picker/store/coloringTheme.model";
import { ToneOfVoiceCompleted } from "../../features/voice-and-tone/store/tone-of-voice.model";

export type brandDesignFlow = 
    Partial<BrandNameAndTaglineCompleted> &
    Partial<IndustryAndValuesCompleted> &
    Partial<TargetAudienceCompleted> &
    Partial<MissionVisionComponent> &
    Partial<ToneOfVoiceCompleted> &
    Partial<MessagingToneCompleted> &
    Partial<CopywritingCompleted> &
    Partial<LogoSectionCompleted> &
    Partial<ColorPickerThemeCompleted> &
    Partial<TypographyCompleted> &
    Partial<ImagerySectionCompleted>
    // Partial<PrintAndOfflineStyleCompleted> &
    // Partial<SocialMediaStyleCompleted> &
    // Partial<WebsiteAndUIStyleCompleted>
    ;
    

export type BrandDesignCompleted = {
    coreBrandIdentity: {
        brandnameAndTagline: BrandNameAndTaglineCompleted;
        industryAndValues: IndustryAndValuesCompleted;
        targetAudience: TargetAudienceCompleted;
        missionAndVision: MissionVisionComponent;
    },
    brandVoiceAndTone: {
        toneOfVoice: ToneOfVoiceCompleted;
        messagingTone: MessagingToneCompleted;
        copyWriting: CopywritingCompleted;
    },
    visualIdentity: {
        logoDesign: LogoSectionCompleted;
        colorPalette: ColorPickerThemeCompleted;
        typography: TypographyCompleted;
        imagery: ImagerySectionCompleted;
    },
    // applicationAndImplementation: {
    //     printAndOfflineStyle: PrintAndOfflineStyleCompleted;
    //     socialMediaStyle: SocialMediaStyleCompleted;
    //     websiteAndUIStyle: WebsiteAndUIStyleCompleted;
    // }
}

// Transform the entire structure into booleans using mapped types
// type TransformToBooleans<T> = {
//     [K in keyof T]: T[K] extends object ? TransformToBooleans<T[K]> : boolean;
//   };
type TransformToBooleans<T> = {
    [K in keyof T]: T[K] extends string[] ? boolean // If the value is a string[], transform it to a boolean
      : T[K] extends object ? TransformToBooleans<T[K]> // If the value is an object, recursively transform
      : boolean; // For all other types, transform to boolean
}
  // Apply the transformation to `BrandDesignCompleted`
  type BrandDesignCompletionStatus = TransformToBooleans<BrandDesignCompleted>;

// implementation of an actual global brand-design object completion checker: BrandDesignCompletionStatus
//   const iets: BrandDesignCompletionStatus = {
//       coreBrandIdentity: {
//           brandnameAndTagline: {
//               personalities: true,
//               selectedPersonality: true,
//               personalityOptions: {
//                   synonyms: true,
//                   headingFonts: true,
//                   bodyFonts: true
//               },
//               tagLineUsed: true,
//               tagLine: false
//           },
//           industryAndValues: {
//               industries: true,
//               selectedIndustry: true,
//               traits: true,
//               personalities: true,
//               selectedPersonality: true
//           },
//           targetAudience: {
//               ageGroups: true,
//               selectedAgeGroup: true,
//               locations: true,
//               selectedLocation: true,
//               interests: true,
//               selectedInterest: true,
//               behaviors: true,
//               selectedBehavior: true,
//               goalsAndAspirations: true,
//               selectedGoal: true,
//               fearsAndFrustrations: true,
//               selectedIndustry: true
//           },
//           missionAndVision: {
//               mission: true,
//               vision: true
//           }
//       },
//       brandVoiceAndTone: {
//           toneOfVoice: {
//                 formalityIndex: true,
//                 playfulnessIndex: true,
//                 respectIndex: true,
//                 emotionIndex: true,
//             },
//             messagingTone: {
//                 coreMessage: true,
//                 solutionMessage: true,
//                 beneficiary: true,
//             },
//             copyWriting: {
//                 aboutUsMessage: true,
//                 productDescription: true,
//                 callToActionMsg: true,
//             },




//       visualIdentity: {
//             logoDesign: {
//                 logoUsed: true,
//                 logo: true
//             },
//             colorPalette: {
//                 primaryColor: true,
//                 secondaryColor: true,
//                 accentColor: true
//             },
//             typography: {
//                 headingFont: true,
//                 bodyFont: true
//             },
//             imagery: {
//                 imageryUsed: true,
//                 imagery: true
//       },
//       applicationAndImplementation: undefined
//   }