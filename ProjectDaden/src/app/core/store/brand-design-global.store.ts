import { signalStore, withMethods, withState } from '@ngrx/signals';
import {
  BrandDesignCompleted,
  TransformToBooleans,
} from './brand-design.model';

type GlobalFlowState = BrandDesignCompleted;

const initialBrandDesignGlobalFlowState: GlobalFlowState = {
  brandnameAndTagline: {},
  industryAndValues: {},
  targetAudience: {},
  missionAndVision: {},
  toneOfVoice: {},
  messagingTone: {},
  copyWriting: {},
  logoDesign: {},
  colorPalette: {},
  typography: {},
  imagery: {},
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState<GlobalFlowState>(initialBrandDesignGlobalFlowState),
  withMethods((store) => ({
    updateGlobalState() {
        store.brandnameAndTagline().selectedPersonality = "joh";
    }
  }))
);
//   withMethods((store) => ({
//     setBrandNameAndTagline() {
//       // Add your implementation here
//     },
//   }))

// Apply the transformation to `BrandDesignCompleted`
type BrandDesignCompletionStatus = TransformToBooleans<BrandDesignCompleted>;

// implementation of an actual global brand-design object completion checker: BrandDesignCompletionStatus
// const iets: BrandDesignCompletionStatus = {
//   brandnameAndTagline: {
//     personalities: true,
//     selectedPersonality: true,
//     personalityOptions: {
//       synonyms: true,
//       headingFonts: true,
//       bodyFonts: true,
//     },
//     tagLineUsed: true,
//     tagLine: false,
//   },
//   industryAndValues: {
//     industries: true,
//     selectedIndustry: true,
//     traits: true,
//     personalities: true,
//     selectedPersonality: true,
//   },
//   targetAudience: {
//     ageGroups: true,
//     selectedAgeGroup: true,
//     locations: true,
//     selectedLocation: true,
//     interests: true,
//     selectedInterest: true,
//     behaviors: true,
//     selectedBehavior: true,
//     goalsAndAspirations: true,
//     selectedGoal: true,
//     fearsAndFrustrations: true,
//     selectedIndustry: true,
//   },
//   missionAndVision: {
//     mission: true,
//     vision: true,
//   },
//   toneOfVoice: {
//     formalityIndex: true,
//     playfulnessIndex: true,
//     respectIndex: true,
//     emotionIndex: true,
//   },
//   messagingTone: {
//     coreMessage: true,
//     solutionMessage: true,
//     beneficiary: true,
//   },
//   copyWriting: {
//     aboutUsMessage: true,
//     productDescription: true,
//     callToActionMsg: true,
//   },
//   logoDesign: {
//     personalities: true,
//     selectedPersonality: true,
//     primairyLogoPath: true,
//     secondaryLogoPath: true,
//     iconOnlyLogoPath: true,
//   },
//   colorPalette: {
//     colorIndustries: true,
//     selectedColorIndustry: true,
//     colorPersonalities: true,
//     selectedColorPersonality: true,
//     colorValues: true,
//     selectedColorValue: true,
//     colorScheme: true,
//     selectedcolorScheme: true,
//     primaryColor: true,
//     secondaryColor: true,
//     tertiaryColor: true,
//   },
//   typography: {
//     personalities: true,
//     selectedPersonality: true,
//     personalityOptions: {
//       synonyms: true,
//       headingFonts: true,
//       bodyFonts: true,
//     },
//     typeScales: true,
//     selectedTypeScale: true,
//   },
//   imagery: {
//     personalities: true,
//     selectedPersonality: true,
//     imageryStyles: true,
//     selectedImageryStyle: true,
//     stockLibInput: true,
//   },
// };
