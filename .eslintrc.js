module.exports = {
  extends: ['@uspect/eslint-config/app', '@uspect/eslint-config-react'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
  },
  settings: {
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      tsconfigRootDir: __dirname,
    },
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        map: [['@', './src']],
      },
    },
  },
};
