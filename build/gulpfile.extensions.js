/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const util = require('./lib/util');
const task = require('./lib/task');

/**
 * Extension compilation tasks
 */

// Clean extensions build
const cleanExtensionsBuildTask = task.define('clean-extensions-build', util.rimraf('.build/extensions'));

// Compile component library extension
const compileComponentLibraryTask = task.define('compile-component-library', () => {
	return gulp.src('extensions/component-library/**/*')
		.pipe(gulp.dest('.build/extensions/component-library'));
});

// Compile templates extension
const compileTemplatesTask = task.define('compile-templates', () => {
	return gulp.src('extensions/templates/**/*')
		.pipe(gulp.dest('.build/extensions/templates'));
});

// Compile themes extension
const compileThemesTask = task.define('compile-themes', () => {
	return gulp.src('extensions/themes/**/*')
		.pipe(gulp.dest('.build/extensions/themes'));
});

// Compile all extensions
const compileExtensionsTask = task.define('compile-extensions', task.parallel(
	cleanExtensionsBuildTask,
	compileComponentLibraryTask,
	compileTemplatesTask,
	compileThemesTask
));

// Watch extensions
const watchExtensionsTask = task.define('watch-extensions', () => {
	gulp.watch('extensions/component-library/**/*', compileComponentLibraryTask);
	gulp.watch('extensions/templates/**/*', compileTemplatesTask);
	gulp.watch('extensions/themes/**/*', compileThemesTask);
});

// Compile extension media
const compileExtensionMediaTask = task.define('compile-extension-media', () => {
	return gulp.src('extensions/**/*.{png,jpg,jpeg,gif,svg,ico,woff,woff2,ttf,eot}')
		.pipe(gulp.dest('.build/extensions'));
});

// Bundle components task
const bundleComponentsTask = task.define('bundle-components', () => {
	return gulp.src('.build/extensions/component-library/**/*')
		.pipe(gulp.dest('dist/extensions/component-library'));
});

// Register Gulp tasks
gulp.task('clean-extensions-build', cleanExtensionsBuildTask.fn);
gulp.task('compile-component-library', compileComponentLibraryTask.fn);
gulp.task('compile-templates', compileTemplatesTask.fn);
gulp.task('compile-themes', compileThemesTask.fn);
gulp.task('compile-extensions', compileExtensionsTask.fn);
gulp.task('watch-extensions', watchExtensionsTask.fn);
gulp.task('compile-extension-media', compileExtensionMediaTask.fn);
gulp.task('bundle-components', bundleComponentsTask.fn);

// Export tasks
module.exports = {
	compileExtensionsTask,
	watchExtensionsTask,
	compileExtensionMediaTask,
	cleanExtensionsBuildTask,
	bundleComponentsTask
};
