exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'cucumber',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: '*.feature',

  cucumberOpts: {
    require: 'stepDefinitions.coffee',
    format: 'pretty'
  }

};
