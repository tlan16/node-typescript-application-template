import pino, { type Logger, type TransportSingleOptions } from 'pino';
import { environmentVariables } from "./environmentVariables";
import { randomUUID } from "node:crypto";

export let logger: Logger;

/**
 * Call this function at once you identified the transaction.
 * Calling without transactionId will result in a randomly generated one.
 */
export const initLogger = (transactionId?: string) => {
  const prettyTransport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  } satisfies TransportSingleOptions;
  logger = pino({
    /**
     * Intentionally turning off logging for CI environment, so it doesn't pollute stdout.
     */
    level: process?.['env']?.['CI'] ? 'silent' : environmentVariables.APP_LOG_LEVEL,
    redact: ['user'],
    ...environmentVariables.NODE_ENV === 'development' ? { transport: prettyTransport } : {},
  }).child({
    transactionId: transactionId ?? randomUUID(),
  });
};
