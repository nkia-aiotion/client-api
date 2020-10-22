module.exports = {
    extends: ['prettier'],
    plugins: [
        // ...
        'prettier',
    ],
    parser: 'babel-eslint',
    rules: {
        semi: ['error', 'never'],
        'import/no-cycle': 'off',
        // 'prefer-destructuring': 'off',
        'no-console': 'off',
        // 'no-undef': 'off',
        'no-unused-vars': 'warn',
        // 'react/prop-types': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
}
