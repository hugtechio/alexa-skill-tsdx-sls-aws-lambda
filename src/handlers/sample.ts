import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { isIntent } from './lib/validator';

const SampleIntentHandler: core.RequestHandler = {
  canHandle(handlerInput: core.HandlerInput): boolean {
    return isIntent(handlerInput, 'SampleIntentHandler');
  },
  handle(handlerInput: core.HandlerInput): model.Response {
    const speechText = 'SampleIntentHandler!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('SampleIntentHandler!', speechText)
      .withShouldEndSession(true)
      .getResponse();
  },
};

export default SampleIntentHandler;
