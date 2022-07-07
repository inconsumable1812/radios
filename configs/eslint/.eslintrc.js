const missedAirBnBRules = require('./missedAirBnBRules');

const config = {
  ignorePatterns: ['next-env.d.ts'],
  extends: [
    // рекомендованные правила от https://github.com/iamturns/eslint-config-airbnb-typescript - в nextJS их нет, поддержка react обеспечивается только набором правил от NextJS
    'airbnb-base',

    // правила от nextJS, должны быть после всех остальных правил
    'next/core-web-vitals',

    /**
     * Включает (eslint-plugin-prettier), который запускает аналитику Prettier analysis как часть ESLint.
     * Отключает любые правила, которые могут конфликтовать с существующими правилами Prettier используя(eslint-config-prettier).
     * Должен быть после всех правил.
     */
    'plugin:prettier/recommended'
  ],
  plugins: ['testing-library', 'jest-dom'],
  rules: {
    ...missedAirBnBRules,

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/function-component-definition': [
      'off',
      {
        namedComponents: 'function-expression',
        unnamedComponents: 'function-expression'
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index'
        ],
        'newlines-between': 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['./configs/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    },
    {
      files: ['**/*.ts?(x)'],

      // https://github.com/iamturns/eslint-config-airbnb-typescript
      parserOptions: {
        project: './tsconfig.json'
      },

      extends: [
        // Лист рекомендованных правил от https://github.com/iamturns/eslint-config-airbnb-typescript - чинит правила, которые плохо работают с типизацией, например 'lines-around-comment' внутри фигурных скобок типа
        'airbnb-typescript',

        'plugin:prettier/recommended'
      ]
    },
    {
      files: ['**/pages/**/*'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['**/*slice.ts?(x)'],
      rules: {
        // https://redux-toolkit.js.org/usage/immer-reducers
        'no-param-reassign': [
          'error',
          { props: true, ignorePropertyModificationsFor: ['state'] }
        ]
      }
    }
  ]
};

module.exports = config;
