import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { cancel } from '../lib/validator';

const CancelIntentHandler: core.RequestHandler = {
  canHandle: cancel,
  handle(handlerInput: core.HandlerInput): model.Response {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Goodbye!', speechText)
      .withShouldEndSession(true)
      .getResponse();
  },
};

export { CancelIntentHandler };
