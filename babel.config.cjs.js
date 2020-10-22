module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: 'defaults',
                },
                useBuiltIns: 'usage',
                corejs: '3',
                modules: 'cjs',
            },
        ],
    ],
    plugins: [
        [
            'transform-remove-console',
            {
                exclude: ['error', 'warn'],
            },
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-async-to-generator',
    ],
}
