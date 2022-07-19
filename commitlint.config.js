module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'config', 'chore'],
    ],
    'type-case': [2, 'always', ['lower-case']],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['lower-case']],
    // 'references-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['PD'],
    },
  },
};