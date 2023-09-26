module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true,
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            typescript: {},
        },
    },
 
 
    extends: [
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
    ],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    ],
    parserOptions: {
        ecmafeatures: { jsx: true },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['react','@typescript-eslint', 'react-native'],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react-native/no-unused-styles': 'error',
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            { "allowExpressions": true } 
        ],
        "react/react-in-jsx-scope": "off",
        "react/style-prop-object":"off",
        "@typescript-eslint/explicit-function-return-type":"off",
    },
 };