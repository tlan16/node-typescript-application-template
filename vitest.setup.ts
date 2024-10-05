import { join } from "path";
import { existsSync } from "node:fs";
import dotenv from 'dotenv';
import { environmentVariables, setEnvironmentVariables } from "./src/environmentVariables";
import { initLogger } from "./src/logger";

[
  join(import.meta.dirname, '..', '.env'),
].forEach(path => {
  if (existsSync(path)) {
    dotenv.config({ path });
    setEnvironmentVariables(process.env);
    initLogger(`vitest-${environmentVariables.NODE_ENV}`);
  }
});
