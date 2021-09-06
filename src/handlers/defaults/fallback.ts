import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { fallback } from '../lib/validator';

const FallbackIntentHandler: core.RequestHandler = {
  canHandle: fallback,
  handle(handlerInput: core.HandlerInput): model.Response {
    const FALLBACK_MESSAGE = `The skill can't help you with that.  It can help you discover facts about space if you say tell me a space fact. What can I help you with?`;

    const FALLBACK_REPROMPT = 'What can I help you with?';
    return handlerInput.responseBuilder
      .speak(FALLBACK_MESSAGE)
      .reprompt(FALLBACK_REPROMPT)
      .getResponse();
  },
};

export { FallbackIntentHandler };
