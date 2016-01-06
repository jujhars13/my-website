module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        imagemin: {
            jpgs: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'jhsd-history/img/src/',
                    src: ['*.jpg','*.png','*.gif'],
                    dest: 'jhsd-history/img/dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['imagemin']);
};

