// eslint-disable-next-line @typescript-eslint/no-var-requires
const branches_config = require('./branches');

const modified_config = Object.assign({}, branches_config);
modified_config.plugins.push(
  '@semantic-release/github',
);

module.exports = modified_config;
