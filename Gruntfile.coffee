module.exports = (grunt)->

  grunt.initConfig
    cucumberjs:
      options:
        format: 'pretty'
      features: 'test/features'

  grunt.loadNpmTasks 'grunt-cucumberjs'

  grunt.registerTask 'default', 'test'
  grunt.registerTask 'test', 'cucumberjs'
