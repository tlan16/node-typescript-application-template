import pino from 'pino'
import { environmentVariables } from './environmentVariables'

export const logger = pino({
  level: environmentVariables.LOG_LEVEL,
})
