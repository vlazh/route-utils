/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: require.resolve('@vzh/configs/eslint/ts.common.eslintrc.js'),
  rules: {
    'import/no-unresolved': ['error', { ignore: ['history'] }],
  },
};
