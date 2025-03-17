/*
* @description
* This is the Type for Formalities.
* @param formalityIndex: number - The selected number of formality.
* */
export type Formality = {
    formalityIndex: number;
  }

  /*
* @description
* This is the Type for Playfulness.
* @param playfulnessIndex: number - The selected number of Playfulness.
* */
export type Playfulness = {
    playfulnessIndex: number;
  }

  /*
* @description
* This is the Type for Respect.
* @param respectIndex: number - The selected number of Respect.
* */
export type Respect = {
    respectIndex: number;
  }

  /*
* @description
* This is the Type for Emotion.
* @param emotionIndex: number - The selected number of Emotion.
* */
export type Emotion = {
    emotionIndex: number;
  }

  /*
  * @description
  * This is the Type for the Tone of voice Complete Type.
  * @param formality & playfulness & respect & emotion - The formality & playfulness & respect & emotion complete Type. 
  * */
  export type ToneOfVoiceCompleted = Formality & Playfulness & Respect & Emotion;