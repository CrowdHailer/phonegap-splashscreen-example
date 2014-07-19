module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        phonegapsplash: {
            all: {
                src: 'raw.png',
                dest: 'res'
            }
        }
    });

    // Load the plugin that provides the "rasterize" task.
    grunt.loadNpmTasks('grunt-phonegapsplash');

    // Default task(s).
    grunt.registerTask('default', ['phonegapsplash']);

};