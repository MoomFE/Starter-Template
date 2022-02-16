module.exports = {
  root: true,
  extends: [
    '@moomfe/eslint-config/.eslintrc.vue3.js'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
