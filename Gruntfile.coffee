module.exports = (grunt)->

  grunt.initConfig
    protractor:
      options:
        configFile: 'features/protractor.conf.js'
        keepAlive: true
        noColor: false
        args:
          baseUrl: 'http://localhost:1999/'
          cucumberOpts:
            format: 'summary'

      default: {}

      full:
        options:
          args:
            cucumberOpts:
              format: 'pretty'

    karma:
      once:
        options:
          files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/client/**/*Spec.coffee',
            'js/**/*.js'
          ]
          browsers: ['PhantomJS']
          autoWatch: false
          frameworks: ['jasmine']
          singleRun: true
          preprocessors:
            '**/*.coffee': ['coffee']
      watch:
        autoWatch: true
        singleRun: false

  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-protractor-runner'

  grunt.registerTask 'default', 'test'
  grunt.registerTask 'test:cukes', 'protractor:full'
  grunt.registerTask 'test', ['protractor:default', 'karma:once']
