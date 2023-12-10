import { z } from 'zod'

const environmentVariablesSchema = z.object({
  APP_NAME: z.string(),
})

export const environmentVariables = environmentVariablesSchema.parse(process.env);
