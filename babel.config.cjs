/**
 * @type {import('@babel/core').TransformOptions}
 */
const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};

module.exports = babelConfig;
