module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/front-app-project'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ],
      thresholds: {
        emitWarning: true,
        skipFilesWithNoCoverage: true,
        global: {
          statements: 70,
          lines: 70,
          branches: 70,
          functions: 70,
        },
        each: {
          statements: 70,
          lines: 70,
          branches: 70,
          functions: 70,
          overrides: {},
        }
      }
    },
    exclude: [
      "./node_modules/",
    ],
    reporters: ['coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    customLaunchers:{
      HeadlessChrome:{
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    concurrency: Infinity,
    singleRun: false,
    restartOnFileChange: true
  });
};