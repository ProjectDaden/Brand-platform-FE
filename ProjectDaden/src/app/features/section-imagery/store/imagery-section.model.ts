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
* This is the Type for the ImageryStyle.
* @param imageryStyles: string[] - The list of imagery-styles.
* @param selectedImageryStyle: string | undefined - The selected selectedImageryStyle.
* */
export type ImageryStyle = {
    imageryStyles: string[];
    selectedImageryStyle: string | undefined;
  }

/*
* @description
* This is the Type for the ImageryStyle.
* @param imageryStyles: string[] - The list of imagery-styles.
* @param selectedImageryStyle: string | undefined - The selected selectedImageryStyle.
* */
export type StockLib = {
    stockLibInput: string;
  }

  /*
  * @description
  * This is the Type for the LogoSectionCompleted Type.
  * @param Personalities & PrimaryLogo & SecondaryLogo & IconOnlyLogo - The logo section complete Type. 
  * */
  export type ImagerySectionCompleted = Personalities & ImageryStyle & StockLib;