// eslint-disable-next-line
module.exports = {
  branches: [
    {
      name: 'main',
    },
    {
      name: '!(main|depfu*)',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
};
