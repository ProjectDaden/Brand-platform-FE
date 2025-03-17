/*
* @description
* This is the Type for the Personalities.
* @param personalities: string[] - The list of personalities.
* @param selectedPersonality: string | undefined - The selected personality.
* */
export type Personalities = {
    personalities: string[];
    selectedPersonality: string | undefined;
  }

/*
* @description
* This is the Type for the PrimaryLogo.
* @param primairyLogoPath: string | undefined - The selected primairyLogoPath.
* */
export type PrimaryLogo = {
    primairyLogoPath: string | undefined;
  }

/*
* @description
* This is the Type for the SecondaryLogo.
* @param secondaryLogoPath: string | undefined - The selected secondaryLogoPath.
* */
export type SecondaryLogo = {
    secondaryLogoPath: string | undefined;
  }

  /*
* @description
* This is the Type for the IconOnlyLogo.
* @param iconOnlyLogoPath: string | undefined - The selected iconOnlyLogoPath.
* */
export type IconOnlyLogo = {
    iconOnlyLogoPath: string | undefined;
  }

  /*
  * @description
  * This is the Type for the LogoSectionCompleted Type.
  * @param Personalities & PrimaryLogo & SecondaryLogo & IconOnlyLogo - The logo section complete Type. 
  * */
  export type LogoSectionCompleted = Personalities & PrimaryLogo & SecondaryLogo & IconOnlyLogo;