import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { error } from '../lib/validator';

const ErrorHandler: core.ErrorHandler = {
  canHandle: error,
  handle(handlerInput: core.HandlerInput, error: Error): model.Response {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak("Sorry, I don't understand your command. Please say it again.")
      .reprompt("Sorry, I don't understand your command. Please say it again.")
      .getResponse();
  },
};

export { ErrorHandler };
