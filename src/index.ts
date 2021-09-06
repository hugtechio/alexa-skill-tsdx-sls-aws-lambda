import { Handler } from 'aws-lambda';
import * as core from 'ask-sdk-core';
import { Handlers, ErrorHandler } from './handlers';
import { CustomSkill } from 'ask-sdk-core/dist/skill/CustomSkill';

let skill: CustomSkill;

const handler: Handler = async (event, context) => {
  console.log(`REQUEST++++${JSON.stringify(event)}`);
  if (!skill) {
    skill = core.SkillBuilders.custom()
      .addRequestHandlers(...(Handlers as core.RequestHandler[]))
      .addErrorHandlers(ErrorHandler)
      .create();
  }

  const response = await skill.invoke(event, context);
  console.log(`RESPONSE++++${JSON.stringify(response)}`);

  return response;
};

export default handler;
