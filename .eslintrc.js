module.exports = {
    'env': {
        'browser': true,
        'mocha': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'import'
    ],
    'rules': {
        semi: 2,
        'space-before-blocks': [2, 'always'],
        'quotes': [2, 'single'],
        'no-trailing-spaces': 2,
        'space-infix-ops': 2,
        'space-before-function-paren': [
            2,
            {
                'named': 'never',
                'anonymous': 'never',
                'asyncArrow': 'always'
            }
        ],
    }
};