/*
* @description
* This is the Type for Messaging.
* @param Messaging: string - The core message.
* @param solutionMessage: string - The solution message.
* */
export type MessagingTone = {
    coreMessage: string;
    solutionMessage: string;
  }

  /*
* @description
* This is the Type for Differentiator .
* @param Differentiator : string[] - The list of beneficiaries.
* */
export type Differentiator = {
    beneficiary: string[];
  }

  /*
  * @description
  * This is the Type for the Tone Messaging.
  * @param MessagingTone & Differentiator For the Messaging section. 
  * */
  export type MessagingToneCompleted = MessagingTone & Differentiator;