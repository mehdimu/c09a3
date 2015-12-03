module.exports = function(grunt) {
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	uglify: {
	    options: {

			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    },
	    build: {
	    	files: [
	    		{ src: [
	    			'public/js/models/*.js',
	    			'public/js/collections/*.js',
	    			'public/js/views/*.js',
	    			'public/js/main.js',
	    			'public/js/utils.js',

	    			], dest: 'public/js/<%= pkg.name %>-min.js'}
	    	]
	    },
	},

	qunit: {
		options: {
			'--ignore-ssl-errors':true,
		},
	    all: {

			options: {
		    	urls: ['https://mathlab.utsc.utoronto.ca:<%= pkg.port %>/test/test.html'],

			}
		}
	},

	jshint: {
	    options: {
			curly: true,  // require curly braces around all blocks
			eqeqeq: true,  // require use of exact equality comparison
			nonew: true,   // prohibit use of Constructor for side effects
			undef: true,  // prohibit use of explicitly undeclared var's
			unused: true,  // warn on variables that are defined but not used
			// want browser false for server-side code, true for client-side
			browser: false,  // expose globals defined by browsers
			devel: true,  // expose globals used for debugging, s.a. console
			strict: "global",
			node: true,
			globals: {
			    jQuery: true,
			    _: false,
			    $: false,
			    Backbone: true
			},
			ignores: ['public/js/lib/**/*.js', 'public/js/splat-min.js'],
			reporter: require('jshint-html-reporter'),
			reporterOutput: 'public/jshint_report.html'
	    },
	    files: {
		src: ['public/js/**/*.js']
	    }
	}

    });

    // Load plugins for , "uglify", "qunit", "jshint"
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s)

    // grunt.registerTask('default', ['jshint', 'uglify', 'qunit']);
    grunt.registerTask('default', ['jshint', 'uglify', 'qunit']);

};
