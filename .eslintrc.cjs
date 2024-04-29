module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:boundaries/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: true,
    module: true,
    require: true,
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  settings: {
    'boundaries/elements': [
      { type: 'app', pattern: 'app/*' },
      { type: 'pages', pattern: 'pages/*' },
      { type: 'modules', pattern: 'modules/*' },
      { type: 'components', pattern: 'components/*' },
      { type: 'shared', pattern: 'shared/*' },
    ],
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['vue', 'eslint-plugin-import'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    'prefer-const': 'error',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'import/order': [
      'warn',
      {
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        'pathGroups': [
          { group: 'internal', position: 'after', pattern: '@/pages/**' },
          { group: 'internal', position: 'after', pattern: '@/modules/**' },
          { group: 'internal', position: 'after', pattern: '@/components/**' },
          { group: 'internal', position: 'after', pattern: '@/shared/**' },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/app/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/pages/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/modules/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/components/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/shared/*/*/**'] },
          { message: 'Prefer absolut imports instead of relatives (for root modules)', group: ['../**/app'] },
          { message: 'Prefer absolut imports instead of relatives (for root modules)', group: ['../**/pages'] },
          { message: 'Prefer absolut imports instead of relatives (for root modules)', group: ['../**/modules'] },
          { message: 'Prefer absolut imports instead of relatives (for root modules)', group: ['../**/components'] },
          { message: 'Prefer absolut imports instead of relatives (for root modules)', group: ['../**/shared'] },
        ],
      },
    ],
    'boundaries/element-types': [
      'warn',
      {
        default: 'disallow',
        rules: [
          { from: 'app', allow: ['pages', 'modules', 'components', 'shared'] },
          { from: 'pages', allow: ['modules', 'components', 'shared'] },
          { from: 'modules', allow: ['components', 'shared'] },
          { from: 'components', allow: ['shared'] },
          { from: 'shared', allow: ['shared'] },
        ],
      },
    ],
  },
}
