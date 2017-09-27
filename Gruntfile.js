module.exports = function(grunt) {
	  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
  
	  concat: {
		  options: {
			// define a string to put between each file in the concatenated output
			separator: ';'
		  },
		  dist: {
			// the files to concatenate
			src: ['src/views/js/*.js'],
			// the location of the resulting JS file
			dest: 'src/views/js/<%= pkg.name %>.js'
		  }
		},
	
		htmlmin: {
		   dist: {
			  options: {
				 removeComments: true,
				 collapseWhitespace: true
			  },
			  files: {
				 'dist/views/pizza.html' : 'src/views/*.html'
			  }
		   }
		},
		
  /* MINIFY JS */
  uglify: {
	  options: {
		  sourceMap: true,
		// the banner is inserted at the top of the output
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	  },
	  dist: {
		files: {
		  'dist/views/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
		}
	  }
	},
  
  /* MINIFY CSS */
  cssmin: {
	   dist: {
		  options: {
			 banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		  },
		  files: {
			 'dist/views/css/style.min.css': ['src/views/**/*.css']
		  }
	  }
	},
	
	/* MINIFY IMAGES */
	imagemin: {
	   dist: {
		  options: {
			optimizationLevel: 5
		  },
		  files: [{
			 expand: true,
			 cwd: 'src/views/images',
			 src: ['**/*.{png,jpg,gif}'],
			 dest: 'dist/views/images'
		  }]
	   }
	},
	
	jshint: {
      files: ['Gruntfile.js', 'views/**/*'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
  
  /* WATCH FOR CHANGES */
  watch: {
	  html: {
		  files: ['src/views/*html'],
		  tasks: ['html:dev']
	  },
      css: {
        files: ['src/views/css/*.css'],
        tasks: ['css:dev']
      },
      js: {
        files: ['src/views/js/*.js'],
        tasks: ['uglify:dev']
      }
    }
   });
   
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', ['jshint', 'imagemin', 'htmlmin', 'cssmin', 'concat', 'uglify']);
  
};