module.exports = {
    'extends': 'eslint:recommended',
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'space-before-function-paren': ['warn', 'never'],
        'no-console': 0,
        'no-constant-condition': 0,
        'no-undef': 0,
        'no-unused-vars': ['error', { 'vars': 'local', 'args': 'none' }]
    }
};
