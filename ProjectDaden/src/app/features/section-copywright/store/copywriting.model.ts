/*
* @description
* This is the Type for About us message.
* @param aboutUsMessage: string - The about us message.
* */
export type AboutUsMsg = {
    aboutUsMessage: string;
  }

  /*
* @description
* This is the Type for ProductDescription.
* @param productDescription: string - The productDescription message.
* */
export type ProductDescription = {
    productDescription: string;
  }

  /*
* @description
* This is the Type for CallToAction.
* @param callToActionMsg: string - The call to action message.
* */
export type CallToAction = {
    callToActionMsg: string;
  }

    /*
    * @description
    * This is the Type for the Copywriting.
    * @param AboutUsMsg & ProductDescription & CallToAction For the Copywriting section. 
    * */
    export type CopywritingCompleted = AboutUsMsg & ProductDescription & CallToAction;