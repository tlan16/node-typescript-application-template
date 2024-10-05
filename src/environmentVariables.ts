import { z } from "zod";
import { levels, type LevelWithSilent } from "pino";

const levelName = Object.keys(levels.values) as [LevelWithSilent, ...LevelWithSilent[]];

const schema = z.object({
  APP_LOG_LEVEL: z.enum(levelName).optional().default('info'),
  NODE_ENV: z.enum(['development', 'production', 'test']).optional().default('production'),
});

export let environmentVariables = {} as z.infer<typeof schema>;

/**
 * Environment variable can be sourced from different places. process.env is just one of it.
 * Call this function at early stage of request handling to populate the singleton `environmentVariables`.
 */
export const setEnvironmentVariables = (source: unknown) => {
  environmentVariables = schema.parse(source);
};
