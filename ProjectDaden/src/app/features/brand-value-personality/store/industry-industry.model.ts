/*
* @description
* This is the Type for Industry.
* @param industries: string[] - The list of industries.
* @param selectedindustry: string | undefined - The selected industry.
* */
export type Industry = {
    industries: string[];
  }
  
  /*
  * @description
  * This is the Type for the traits Options.
  * @param traits: string[] - The list of traits
  * */
  export type IndustryValues = {
      values: string[];
    }
  
  
/*
* @description
* This is the Type for the Personalities.
* @param personalities: string[] - The list of personalities
* @param selectedPersonality: string | undefined - The selected personality
* */
export type Personalities = {
    personalities: string[];
    selectedPersonality: string | undefined;
  }
  
  /*
  * @description
  * This is the Type for the Industry & Values Complete Type.
  * @param Industry & IndustryTraits & Personalities - The Industry, IndustryTraits and Personalities
  * */
  export type IndustryAndValuesCompleted = Industry & IndustryValues;