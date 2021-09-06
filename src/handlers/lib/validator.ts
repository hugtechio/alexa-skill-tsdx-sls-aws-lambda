import * as core from 'ask-sdk-core';

export const isIntent = (input: core.HandlerInput, name: string): boolean => {
  const request = input.requestEnvelope.request;
  // @ts-ignore
  return request.type === 'IntentRequest' && request.intent.name === name;
};

const isLaunch = (input: core.HandlerInput): boolean => {
  const request = input.requestEnvelope.request;
  return request.type === 'LaunchRequest';
};

const isSessionEnd = (input: core.HandlerInput): boolean => {
  const request = input.requestEnvelope.request;
  return request.type === 'SessionEndedRequest';
};

export const cancel = (handlerInput: core.HandlerInput) =>
  isIntent(handlerInput, 'AMAZON.CancelIntent');
// @ts-ignore
export const error = (handlerInput: core.HandlerInput, error: Error) => true;
export const fallback = (handlerInput: core.HandlerInput) =>
  isIntent(handlerInput, 'AMAZON.FallbackIntent');
export const help = (handlerInput: core.HandlerInput) =>
  isIntent(handlerInput, 'AMAZON.HelpIntent');
export const launch = (handlerInput: core.HandlerInput) =>
  isLaunch(handlerInput);
export const sessionEnd = (handlerInput: core.HandlerInput) =>
  isSessionEnd(handlerInput);
export const stop = (handlerInput: core.HandlerInput) =>
  isIntent(handlerInput, 'AMAZON.StopIntent');
