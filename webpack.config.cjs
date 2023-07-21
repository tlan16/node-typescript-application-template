const path = require('path');

module.exports = {
  entry: './src/main.ts',
  target: 'async-node20.4',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        type: "javascript/esm",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  experiments: {
    topLevelAwait: true,
  },
};
