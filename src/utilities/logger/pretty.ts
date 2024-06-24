/**
 * This file is to workaround esm issue with pino-pretty.
 */
import Module from "node:module";
import type PinoPretty from "pino-pretty";

const require = Module.createRequire(import.meta.url);

// noinspection ES6ConvertRequireIntoImport
const prettyLib: typeof PinoPretty = require('pino-pretty');

export const pretty = prettyLib({
  colorize: true,
});
