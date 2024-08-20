import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      semi: 'error',
    },
  },
];
