module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
			options: {
		      separator: ';',
		    },
		    dist: {
		      src: ['../wp-includes/js/jquery/jquery.js',
                    'js/color-scheme-control.js',
                    'js/customize-preview.js',
                    'function.js', 
                    'html5.js', 
                    'keyboard-image-navigation.js',
                    'skip-link-focus-fix.js'],
              dest: 'js/build/production.js'
		    }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style.css': 'style.scss'
                }
            } 
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            } ,
            css: {
                files: ['*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }


    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
    grunt.registerTask('default',['watch']);

};