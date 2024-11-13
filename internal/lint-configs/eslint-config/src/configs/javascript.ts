import type { Linter } from 'eslint'

import js from '@eslint/js'
import globals from 'globals'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'

export async function javascript(): Promise<Linter.Config[]> {
  return [
    {
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        'unused-imports': pluginUnusedImports,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        prettier,
      },
      rules: {
        ...js.configs.recommended.rules,
      },
    },
  ]
}
