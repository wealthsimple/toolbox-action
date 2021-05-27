import * as core from '@actions/core';
import * as io from '@actions/io';
import * as toolbox from '@wealthsimple/actions-toolbox';
import { callAsyncFunction } from './async-function';
import { run } from './run';

async function main(): Promise<void> {
  const script = core.getInput('script', { required: true });
  const result = await callAsyncFunction(
    { require: require, core, io, toolbox },
    script,
  );
  const output = JSON.stringify(result);

  core.setOutput('result', output);
}

run(main);
