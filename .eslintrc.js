/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: require.resolve('@vzh/configs/eslint/common'),
  rules: {
    'import/no-unresolved': ['error', { ignore: ['history'] }],
  },
};
