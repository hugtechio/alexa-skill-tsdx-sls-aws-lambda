import * as core from 'ask-sdk-core';
export declare const isIntent: (input: core.HandlerInput, name: string) => boolean;
export declare const cancel: (handlerInput: core.HandlerInput) => boolean;
export declare const error: (handlerInput: core.HandlerInput, error: Error) => boolean;
export declare const fallback: (handlerInput: core.HandlerInput) => boolean;
export declare const help: (handlerInput: core.HandlerInput) => boolean;
export declare const launch: (handlerInput: core.HandlerInput) => boolean;
export declare const sessionEnd: (handlerInput: core.HandlerInput) => boolean;
export declare const stop: (handlerInput: core.HandlerInput) => boolean;
