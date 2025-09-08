/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

// TypeScript project configuration
const tsProject = ts.createProject(path.resolve(__dirname, '../tsconfig.json'));

// Clean task
function clean() {
	const del = require('del');
	return del(['../out/**/*']);
}

// Compile TypeScript
function compile() {
	return gulp.src('../src/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('../out'));
}

// Watch task
function watch() {
	return gulp.watch('../src/**/*.ts', compile);
}

// Export tasks
exports.clean = clean;
exports.compile = compile;
exports.watch = watch;
exports.default = gulp.series(clean, compile);
