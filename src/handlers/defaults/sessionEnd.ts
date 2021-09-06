import * as core from 'ask-sdk-core';
import * as model from 'ask-sdk-model';
import { sessionEnd } from '../lib/validator';

const SessionEndedRequestHandler: core.RequestHandler = {
  canHandle: sessionEnd,
  handle(handlerInput: core.HandlerInput): model.Response {
    console.log(
      `Session ended with reason: ${
        (handlerInput.requestEnvelope.request as model.SessionEndedRequest)
          .reason
      }`
    );

    return handlerInput.responseBuilder.getResponse();
  },
};

export { SessionEndedRequestHandler };
