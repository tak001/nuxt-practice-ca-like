module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-useless-constructor': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-use-before-define': 'off',
    'max-len': ['error', { code: 80, ignoreUrls: true }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
}
