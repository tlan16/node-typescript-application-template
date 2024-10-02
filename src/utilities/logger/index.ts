import pino from 'pino';
import { environmentVariables } from "../environmentVariables";
import { pretty } from "./pretty";

export const logger = pino({
  level: environmentVariables.LOG_LEVEL,
  redact: ['user'],
}, environmentVariables.NODE_ENV === 'development' ? pretty : undefined);
