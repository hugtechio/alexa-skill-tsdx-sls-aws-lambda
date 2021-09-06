import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { help } from '../lib/validator';

const HelpIntentHandler: core.RequestHandler = {
  canHandle: help,
  handle(handlerInput: core.HandlerInput): model.Response {
    const speechText = 'You can ask me the weather!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('You can ask me the weather!', speechText)
      .getResponse();
  },
};

export { HelpIntentHandler };
