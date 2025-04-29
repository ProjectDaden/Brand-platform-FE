
/*
* @description
* This is the Type for Agegroups.
* @param ageGroups: string[] - The list of ageGroups.
* */
export type AgeGroup = {
    ageGroups: string[];
    selectedAgeGroup: string | undefined;
  }


  /*
* @description
* This is the Type for locations.
* @param locations: string[] - The list of locations.
*/
export type Location = {
    locations: string[];
    selectedLocation: string | undefined;
  }

//   /*
// * @description
// * This is the Type for interests.
// * @param interests: string[] - The list of interests.
// * */
// export type Interest = {
//     interests: string[];
//     selectedInterest: string | undefined;
//   }

//   /*
// * @description
// * This is the Type for behaviors.
// * @param behaviors: string[] - The list of behaviors.
// * */
// export type Behaviors = {
//     behaviors: string[];
//     selectedBehavior: string | undefined
//   }

//     /*
// * @description
// * This is the Type for goalsAndAspirations.
// * @param goalsAndAspirations: string[] - The list of goalsAndAspirations.
// * */
// export type GoalsAndAspirations = {
//     goalsAndAspirations: string[];
//     selectedGoal: string | undefined
//   }

//       /*
// * @description
// * This is the Type for fearsAndFrustrations.
// * @param fearsAndFrustrations: string[] - The list of fearsAndFrustrations.
// * */
// export type FearsAndFrustrations = {
//     fearsAndFrustrations: string[];
//     selectedIndustry: string | undefined;
//   }
  
  /*
  * @description
  * This is the Type for the Target Audiences complete Type.
  * @param IndustryAndValuesCompleted - The partial of the Personality Associated Options and Tagline
  * */
  export type TargetAudienceCompleted = AgeGroup & Location;