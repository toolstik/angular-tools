module.exports = {
    extends: ['@tinkoff/eslint-config/lib', '@tinkoff/eslint-config-angular'],
    parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'no-type-imports' },
        ],
    },
};
