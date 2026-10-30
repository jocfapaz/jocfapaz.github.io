const isCoverage = process.env.COVERAGE === 'true';

const babelPlugins = isCoverage
  ? [['istanbul', { exclude: ['**/src/main.tsx', '**/tests/**'] }]]
  : [];

const webpackConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: babelPlugins,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-chrome-launcher'),
      ...(isCoverage ? [require('karma-coverage')] : []),
    ],
    files: [
      'tests/setup.ts',
      { pattern: 'tests/**/*.spec.tsx', watched: false },
    ],
    preprocessors: {
      'tests/setup.ts': ['webpack'],
      'tests/**/*.spec.tsx': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only',
    },
    reporters: isCoverage ? ['progress', 'coverage'] : ['progress'],
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text' },
        { type: 'text-summary' },
        { type: 'lcovonly', subdir: '.' },
      ],
      check: {
        global: {
          statements: 80,
          branches: 70,
          functions: 80,
          lines: 80,
        },
      },
    },
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
    client: {
      jasmine: {
        random: false,
      },
    },
    singleRun: true,
    autoWatch: false,
    colors: true,
    logLevel: config.LOG_INFO,
    browserNoActivityTimeout: 60000,
    captureTimeout: 60000,
  });
};
