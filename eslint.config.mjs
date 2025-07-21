// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  /* ────────────────────────────────── */
  /* 0. Общие настройки                 */
  { ignores: ['eslint.config.mjs'] },

  /* 1. Базовые рекомендации ESLint + TS */
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,

  /* 2. Основной исходный код проекта   */
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

  /* 3. Jest-тесты — отключаем "unsafe-call" */
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
    rules: {
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },

  /* 4. Скрипты, сиды, Prisma-таски     */
  {
    files: ['prisma/**/*.ts', 'src/seed/**/*.ts', 'scripts/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
      parserOptions: { ecmaVersion: 'latest' },
    },
  },

  /* 5. Глобальные правила проекта      */
  {
    rules: {
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  /* 6. DTO-папки — смягчаем правило any */
  {
    files: ['src/**/dto/*.ts'],
    rules: { '@typescript-eslint/no-explicit-any': 'off' },
  },

  /* 7. Multer config — отключаем "unsafe‑*" только здесь */
  {
    files: ['src/modules/upload/utils/multer.config.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
);
