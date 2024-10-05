import { initLogger, logger } from './logger';
import { environmentVariables, setEnvironmentVariables } from './environmentVariables';
import { getWelcomeMessage } from './getWelcomeMessage';

export const main = async () => {
  setEnvironmentVariables(process.env);
  initLogger();
  logger.debug(`App started.`, { environmentVariables });
  logger.debug({ environmentVariables });
  logger.info(getWelcomeMessage());
};

await main();
