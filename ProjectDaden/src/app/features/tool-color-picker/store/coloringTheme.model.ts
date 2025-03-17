/*
* @description
* This is the Type for colorIndustry.
* @param colorIndustries: string[] - The list of colorIndustries.
* @param selectedColorIndustry: string - The selected colorIndustry.
* */
export type ColorIndustry = {
    colorIndustries: string[];
    selectedColorIndustry: string;
  }

  /*
* @description
* This is the Type for the Personalities.
* @param personalities: string[] - The list of personalities.
* @param selectedPersonality: string | undefined - The selected personality.
* */
export type ColorPersonalities = {
    colorPersonalities: string[];
    selectedColorPersonality: string | undefined;
  }

/*
* @description
* This is the Type for colorValues.
* @param colorValues: string[] - The list of colorValues.
* @param selectedcolorValue: string - The selected colorValue.
* */
export type ColorValues = {
    colorValues: string[];
    selectedColorValue: string;
  }

  /*
* @description
* This is the Type for ColorSceme.
* @param colorSchemes: string[] - The list of colorSchemes.
* @param selectedcolorScheme: string - The selected selectedcolorScheme.
* */
export type ColorScheme = {
    colorScheme: string[];
    selectedcolorScheme: string;
  }

    /*
* @description
* This is the Type for ColorPalettePicker.
* @param colorPalettePicker: string[] - The list of colorPalettePicker.
* @param PrimaryColor: string - The selected PrimaryColor.
* @param SecondaryColor: string - The list of SecondaryColor.
* @param TertiaryColor: string - The selected TertiaryColor.
* */
export type ColorPalettePicker = {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
  }

    /*
    * @description
    * This is the Type for the Tone of voice ColorPickerThemeCompleted Type.
    * @param ColorPickerThemeCompleted: ColorIndustry & ColorPersonalities & 
    * ColorValues & ColorSceme & ColorPalettePicker complete Type. 
    * */
    export type ColorPickerThemeCompleted = ColorIndustry & ColorPersonalities & ColorValues & ColorScheme & ColorPalettePicker;