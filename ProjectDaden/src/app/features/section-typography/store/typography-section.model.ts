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
* This is the Type for the Personality Options which is inherintlty a part of the Personalities.
* @param synonyms: string[] - The list of synonyms
* @param headingFonts: string[] - The list of heading fonts
* @param bodyFonts: string[] - The list of body fonts
* */
export type PersonalityOptions = {
    synonyms: string[];
    headingFonts: string[];
    bodyFonts: string[];
  }

  /*
  * @description
  * This is the Type for the Personality Options.
  * @param personalityOptions: PersonalityOptions - The personality options
  * */
  export type PersonalityAssOptions = {
      personalityOptions: PersonalityOptions;
  }

  /*
  * @description
  * This is the Type for the Personality Associated Options.
  * @param T: Partial<Personalities> - The partial of the Personalities
  * Whenever Personality is set, there MUST be a set of associated Personality Options
  * */
  export type PersonalityAssociatedOptions<T> = T extends { selectedPersonality: string } ? PersonalityAssOptions : {}; 

/*
* @description
* This is the Type for the TypeScale.
* @param typeScales: string[] - The list of typeScales.
* @param selectedTypeScale: string | undefined - The selected selectedTypeScale.
* */
export type TypeScale = {
    typeScales: string[];
    selectedTypeScale: string | undefined;
  }


  /*
  * @description
  * This is the Type for the BrandName & tagline Complete Type.
  * @param Partial<PersonalityAssociatedOptions<Personalities> & Tagline> - The partial of the Personality Associated Options and Tagline
  * */
  export type TypographyCompleted = Partial<Personalities> & PersonalityAssociatedOptions<{ selectedPersonality: string }> & TypeScale;