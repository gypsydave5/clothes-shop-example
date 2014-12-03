module.exports = (grunt)->

  grunt.initConfig
    protractor:
      options:
        configFile: 'test/features/protractor.conf.js'
        keepAlive: true
        noColor: false
        args:
          {}
      default: {}


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
  grunt.registerTask 'test', ['protractor', 'karma:once']
