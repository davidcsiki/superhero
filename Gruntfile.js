module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // uglify: összetömöriti a fajlokat
        uglify: {
            options: {
                banner: '/*! Copy j.cserko <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/**/*.js',
                dest: 'build/js/all.js'
            }
        },

        // watch: második feladat, a grunt figyel mappákat, a´llomanyokat, s ha ezek modosulnak, akkro lehet hozza valami feladatot hozzarendelni
        watch: {
            scripts: {
                files: ['src/**/*.js', 'src/**/*.html', 'src/**/*.css'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            }
        },
        clean: ["build/**"],
        copy: {
            main: {
                files: [
                    // includes files within path 
                            {
                                expand: true,
                                cwd: "src/",
                                src: ['**/*.html', 'img/*'],
                                dest: 'build/',
                                filter: 'isFile'
                            }
                        ],
                    },
                },
        jshint: {
                    options: {
                                "curly": true,
                                "eqnull": true,
                                "eqeqeq": true,
                                "undef": true,
                                "globals": {
                                    "jQuery": true,
                                    "console": true
                                }
                              },
                    all: ['Gruntfile.js', 'src/js/*.js']
                }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['jshint', 'clean', 'copy', 'uglify']);

};