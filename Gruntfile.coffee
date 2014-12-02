module.exports = (grunt)->

  grunt.initConfig
    cucumberjs:
      options:
        format: 'pretty'
      features: 'test/features'

    karma:
        #configFile: './test/client/karma.conf.js'
      unit:
        options:
          files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/**/*Spec.js',
            'js/**/*.js'
          ]
          browsers: ['PhantomJS']
          autoWatch: false
          frameworks: ['jasmine']
          singleRun: true


  grunt.loadNpmTasks 'grunt-cucumberjs'
  grunt.loadNpmTasks 'grunt-karma'

  grunt.registerTask 'default', 'test'
  grunt.registerTask 'test', ['cucumberjs', 'karma']
