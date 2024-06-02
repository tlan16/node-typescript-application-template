import { z } from "zod";
import { levels, LevelWithSilent } from "pino";

const levelName = Object.keys(levels.values) as [LevelWithSilent, ...LevelWithSilent[]];

const schema = z.object({
  LOG_LEVEL: z.enum(levelName).optional().default('info'),
  NODE_ENV: z.enum(['development', 'production']).optional().default('production'),
})

export const environmentVariables = schema.parse(process.env);
