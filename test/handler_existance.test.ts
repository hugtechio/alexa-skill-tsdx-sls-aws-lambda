const launchEvent = require('./events/launch.json')
import { handler } from '../src/index'

describe('#Launch', () => {
  it('handler should be return launch response', async () => {
    // @ts-ignore
    const res = await handler(launchEvent, {})
    expect(res).toEqual({
        response: {
          card: {
            content: "Thank you for using the order sample skill. What do you want to order?",
            title: "Thank you for using the order sample skill. What do you want to order?",
            type: "Simple",
          },
          outputSpeech: {
            ssml: "<speak>Thank you for using the order sample skill. What do you want to order?</speak>",
            type: "SSML",
          },
          reprompt: {
            outputSpeech: {
              ssml: "<speak>Thank you for using the order sample skill. What do you want to order?</speak>",
              type: "SSML",
            },
          },
          shouldEndSession: false,
        },
        sessionAttributes: {},
        userAgent: "ask-node/2.11.0 Node/v14.14.0",
        version: "1.0",
      }
    )
  })
})