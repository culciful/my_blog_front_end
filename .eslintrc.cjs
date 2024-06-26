/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "semi": ["error", "always"],
    "quote-props": ["error", "consistent"],
    "spaced-comment": ["error", "always",  { "exceptions": ["-+*"] }],
    "space-infix-ops": ["error", { "int32Hint": false }],
    quotes: ["error", "single"],
    indent: ["error", 4, { "ignoredNodes": ["ConditionalExpression"]}],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "arrow-spacing": "error",
    "comma-dangle": ["error", "never"]
  }
}
