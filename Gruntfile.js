module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),


        watch: {
            sass: {
                files: ['styles/scss/*.scss'],
                tasks: ['sass']
            },
            postcss : {
                files: ['styles/css/style.css'],
                tasks: ['postcss']
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [require("autoprefixer")({ browsers: "last 2 versions" })]
            },
            dist: {
                src: "styles/css/style.css"
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'styles/css/style.css' : 'styles/scss/styles.scss'
                }
            }
        }
    });
    
    // Load the plugin(s)
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-sass");
    // Do The Tasks
    grunt.registerTask("default", ["watch", "postcss", "sass"]);
};