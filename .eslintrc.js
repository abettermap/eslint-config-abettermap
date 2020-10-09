export default {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    jsx: true,
    // tsconfigRootDir: __dirname,
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    // "ecmascript": 6, // TODO: rm if not needed
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React
      version: 'detect',
    },
    // jest: {
    //   version: 24,
    // },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier/react',
    // 'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will
    // display prettier errors as ESLint errors. MAKE SURE THIS IS ALWAYS THE
    // LAST CONFIGURATION IN THE EXTENDS ARRAY.
    'plugin:prettier/recommended',
  ],
  rules: {
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-whitespace-before-property': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: ['multiline-block-like'],
      },
      {
        blankLine: 'never',
        prev: 'var',
        next: 'var',
      },
      {
        blankLine: 'always',
        prev: 'var',
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: '*',
        next: 'empty',
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'es5',
      },
    ],
    // NOTE: this part only applies if there are subdirs with their own
    // node_modules folders. Using lerna for this one in tandem with yarn, and
    // this combo flattens it all into a root node_modules so this isn't needed.
    // CRED: https://bit.ly/2HtgMDY ...if it doesn't work, try:
    // https://bit.ly/2HtdGzT
    // "import/no-extraneous-dependencies": ["error",
    //   {
    //     "devDependencies": true,
    //     "packageDir": "./"
    //   }
    // ],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-unary-ops': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}'],
      },
    ],
    'react/jsx-wrap-multilines': [
      0,
      {
        prop: 'parens-new-line',
      },
    ],
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
