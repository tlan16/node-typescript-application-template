import { logger } from './utilities/logger'
import { environmentVariables } from './utilities/environmentVariables'

logger.debug(`App started.`, { environmentVariables })
logger.debug({ environmentVariables })
logger.info('Hello, world!')
