/*
* @description
* This is the Type for Industry.
* @param industries: string[] - The list of industries.
* @param selectedindustry: string | undefined - The selected industry.
* */
export type Industry = {
    brandIndustry: string;
  }
  
  /*
  * @description
  * This is the Type for the traits Options.
  * @param traits: string[] - The list of traits
  * */
  export type IndustryValues = {
      brandValues: string[];
    }
  
  /*
  * @description
  * This is the Type for the Industry & Values Complete Type.
  * @param Industry & IndustryTraits - The Industry and IndustryTraits.
  * */
  export type IndustryAndValuesCompleted = Industry & IndustryValues;