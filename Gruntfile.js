module.exports = function (grunt) {
	var SRC_DIR = 'src';

	grunt.initConfig({
		htmlhint: {
			options: {
				htmlhintrc: 'tasks/.htmlhintrc'
			},
			main: {
				src: [SRC_DIR + '/**/*.html']
			},
		},
		csslint: {
			main: {
				options: {
					csslintrc: 'tasks/.csslintrc'
				},
				src: [
					SRC_DIR + '/**/*.css',
					'!' + SRC_DIR + '/**/reset.css',
					'!' + SRC_DIR + '/**/normalize.css'
				]
			}
		},
		watch: {
			sources: {
				files: [
					SRC_DIR + '/**/*.js',
					SRC_DIR + '/**/*.css',
					SRC_DIR + '/**/*.html'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-htmlhint');

	grunt.registerTask('live', ['watch']);
    grunt.registerTask('livereload', ['live']);
	grunt.registerTask('csscode', ['csslint:main']);
	grunt.registerTask('htmlcode', ['htmlhint:main']);
};