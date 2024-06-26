module.exports = function (grunt) {
	var banner =
		"/*" +
		"C" +
		"-<%= pkg.version%> - " +
		"<%= grunt.template.today('yyyy-mm-dd') %> \n" +
		"* License: <%= pkg.license %> */\n";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		browserify: {
			options: {
				plugin: [[require("esmify"), {}]],
			},
			main: {
				src: "src/app.js",
				dest: "dist/c.js",
			},
			core: {
				src: "src/core.js",
				dest: "dist/c.core.js",
			},
		},
		uglify: {
			options: {
				banner: banner,
				sourceMapRoot: "../",
				sourceMap: "dist/c.min.js.map",
				compress: {
					unused: true,
					dead_code: true,
				},
			},
			main: {
				src: "dist/c.js",
				dest: "dist/c.min.js",
			},
			core: {
				src: "dist/c.core.js",
				dest: "dist/c.core.min.js",
			},
		},
		jsdoc: {
			dist: {
				options: {
					configure: "./docs.json",
				},
			},
		},
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-jsdoc");
	grunt.registerTask("default", [
		"browserify:main",
		"uglify:main",
		"browserify:core",
		"uglify:core",
		"jsdoc",
	]);
	grunt.registerTask("docs", ["jsdoc"]);
	grunt.registerTask("core", ["browserify:core", "uglify:core"]);
};
