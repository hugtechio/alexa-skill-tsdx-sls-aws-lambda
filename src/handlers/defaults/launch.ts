import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { launch } from '../lib/validator';

const LaunchRequestHandler: core.RequestHandler = {
  canHandle: launch,
  handle(handlerInput: core.HandlerInput): model.Response {
    const speechText =
      'Thank you for using the order sample skill. What do you want to order?';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(
        'Thank you for using the order sample skill. What do you want to order?',
        speechText
      )
      .getResponse();
  },
};

export { LaunchRequestHandler };
