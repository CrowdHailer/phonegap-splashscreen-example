module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        phonegapsplash: {
            all: {
                src: 'raw.png',
                dest: 'www/',
                options: {
                    layouts: ['portrait'],
                    profiles: ['windows-phone', 'android', 'ios']
                }
            }
        }
    });

    // Load the plugin that provides the "rasterize" task.
    grunt.loadNpmTasks('grunt-phonegapsplash');

    // Default task(s).
    grunt.registerTask('default', ['phonegapsplash']);

};