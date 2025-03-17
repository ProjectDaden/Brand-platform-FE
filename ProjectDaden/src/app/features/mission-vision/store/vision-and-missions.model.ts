/*
* @description
* This is the Type for Purpose.
* @param purposes: string[] - The list of Purposes.
* @param selectedPurpose: string | undefined - The selected Purpose.
* */
export type Purpose = {
    purposes: string[];
    selectedPurpose: string | undefined;
  }

  /*
* @description
* This is the Type for Audience.
* @param audiences: string[] - The list of Audiences.
* @param selectedAudience: string | undefined - The selected Audience.
* */
export type Audience = {
    audiences: string[];
    selectedAudience: string | undefined;
  }

  /*
  * @description
  * This is the Type for the Vision & missions Complete Type.
  * @param Purpose & Audience - The Vision and missions.
  * */
  export type VisionAndMissionsCompleted = Purpose & Audience;