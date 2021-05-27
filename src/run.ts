import * as core from '@actions/core';
import * as toolbox from '@wealthsimple/actions-toolbox';
import { version as toolboxScriptVersion } from '../package.json';

export async function run<T>(f: () => Promise<T>): Promise<T | void> {
  core.info(`toolbox-script v${toolboxScriptVersion}`);
  toolbox.version();
  process.on('unhandledRejection', handleError);
  return f().catch(handleError);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(err: any): void {
  console.error(err);
  core.setFailed(`Unhandled error: ${err}`);
}
