import { environmentVariables } from './environmentVariables.js'

export const getWelcomeMessage = (): string => {
  return `Welcome to ${environmentVariables.APP_NAME}`;
}
