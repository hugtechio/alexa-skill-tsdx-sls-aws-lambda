import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { stop } from '../lib/validator';

const StopIntentHandler: core.RequestHandler = {
  canHandle: stop,
  handle(handlerInput: core.HandlerInput): model.Response {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Goodbye!', speechText)
      .withShouldEndSession(true)
      .getResponse();
  },
};

export { StopIntentHandler };
