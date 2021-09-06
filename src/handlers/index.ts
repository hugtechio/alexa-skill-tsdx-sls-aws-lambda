import * as defaults from './defaults';
import { ErrorHandler } from './defaults/error';
import SampleIntentHandler from './sample';

const Handlers = [...Object.values(defaults), SampleIntentHandler];

export { Handlers, ErrorHandler };
