import { logger } from './utilities/logger';
import { environmentVariables } from './utilities/environmentVariables';
import { getWelcomeMessage } from './getWelcomeMessage';

export const main = async () => {
  logger.debug(`App started.`, { environmentVariables });
  logger.debug({ environmentVariables });
  logger.info(getWelcomeMessage());
};

await main();
