module.exports = (grunt) ->

  pkg = grunt.file.readJSON '/Users/sdkondo/Work/Grunt/package.json'

  grunt.initConfig

    #config
    js_files: "../html/js"
    css_files: "../html/css"
    scss_files: "../compass/sass"

    #task
    concat:
      set_css:
        src: [
            '<%= css_files %>/initialization.css'
            '<%= css_files %>/base.css'
            '<%= css_files %>/font.css'
            '<%= css_files %>/side.css'
            '<%= css_files %>/decoration.css'
          ]

        dest: '<%= css_files %>/set.css'

    cssmin:
      css:
        files:
          '<%= css_files %>/set.min.css': ['<%= css_files %>/set.css']

    ###
    uglify:
    	options:
    	dist:
    		files:
    ###

    compass:
      dev:
        options:
          config: 'compass.config.rb'
          environment: 'development'

      prod:
        options:
          config: 'compass.config.rb'
          environment: 'production'

    watch:
      js:
        files: ['<%= js_files %>/*.js']
        tasks: ['js']

      css:
        files: ['<%= scss_files %>/*.scss']
        tasks: ['css']

  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  ###
  grunt.registerTask 'js', [
    'uglify'
  ]
  ###

  grunt.registerTask 'css', [
    'compass:dev'
    'concat'
    'cssmin'
  ]