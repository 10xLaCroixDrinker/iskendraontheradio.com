module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),

    exec: {
      run: {
        cmd: './node_modules/.bin/docpad run'
      },

      deploy: {
        cmd: './node_modules/.bin/docpad deploy-ghpages --env static'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-node-version');

  grunt.registerTask('run', ['node_version','exec:run']);
  grunt.registerTask('deploy', ['node_version', 'exec:deploy']);
};
