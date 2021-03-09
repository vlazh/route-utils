/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: require.resolve('@js-toolkit/configs/eslint/common'),
  rules: {
    'import/no-unresolved': ['error', { ignore: ['history'] }],
  },
};
