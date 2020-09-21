module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmanVersion: 2020,
    sourceType: 'module',
    ecmanFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
