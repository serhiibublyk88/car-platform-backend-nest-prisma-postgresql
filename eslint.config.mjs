// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['eslint.config.mjs'] },

  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,

  {
    files: ['src/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.node, ...globals.jest },
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        typescript: { project: path.resolve('./tsconfig.json') },
      },
    },
  },

  {
    files: ['prisma/**/*.ts', 'src/seed/**/*.ts', 'scripts/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },

  {
    rules: {
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/require-await': 'off',
    },
  },

  {
    files: ['src/**/dto/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
