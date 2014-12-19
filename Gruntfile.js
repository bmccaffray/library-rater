'use strict';

module.exports = function(grunt){
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		clean: {
			dev: {
				src: 'build/'
			}
		},
		copy: {
			dev: {
				expand: true,
				cwd: 'app/',
				src: ['*.html', 'css/*.css', 'images/*'],
				dest: 'build/',
				filter: 'isFile'
			}
		},
		jshint: {
			options: {
				jshintrc: true
			}
		},
		browserify: {
			dev: {
				options: {
					transform: 'debowerify',
					debug: true
				},
				src: ['app/js/**/*.js'],
				dest: 'build/bundle.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'dist/bundle.js': ['build/bundle.js']
				}
			}
		},
		// htmlmin && cssmin on dist
		express: {
			options: {
				port: 3000
			},
			dev: {
				options: {
					script: 'server.js'
				}
			}
		},
		watch: {
			dev: {
				files: ['server.js', 'app/**/*'],
				tasks: ['build']
			}
		}
	});

	grunt.registerTask('build', ['clean:dev', 'browserify:dev', 'copy:dev']);
	grunt.registerTask('server', ['build', 'express:dev', 'watch:dev']);
};