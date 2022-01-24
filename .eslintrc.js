module.exports = {
  parser: 'esprima', //default parser
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react', 'prettier'],
  extends: ['prettier', 'react-app'],
  rules: {
    'no-unreachable': 'error',
    'no-console': 'error',
    'prettier/prettier': 'error',
  },
}
