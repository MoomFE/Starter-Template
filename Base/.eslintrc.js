module.exports = {
  root: true,
  extends: [
    '@moomfe/eslint-config/.eslintrc.vue3.js',
    './.eslintrc-auto-import.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
