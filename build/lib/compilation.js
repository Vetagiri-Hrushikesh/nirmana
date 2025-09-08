/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const filter = require('gulp-filter');
const plumber = require('gulp-plumber');
const path = require('path');
const task = require('./task');

/**
 * TypeScript compilation configuration
 */
const tsProject = ts.createProject(path.resolve(__dirname, '../../tsconfig.json'), {
	declaration: false,
	sourceMap: true,
	removeComments: false
});

/**
 * Transpile task for development
 */
function transpileTask(src, out, esbuild = false) {
	return () => {
		// Use TypeScript compiler
		return gulp.src(`${src}/**/*.ts`)
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(tsProject())
			.pipe(sourcemaps.write('.', { sourceRoot: path.resolve(__dirname, '../..', src) }))
			.pipe(gulp.dest(out));
	};
}

/**
 * Compile task for production
 */
function compileTask(src, out, build = false) {
	return () => {
		const tsConfig = build ? 
			ts.createProject(path.resolve(__dirname, '../../tsconfig.json'), {
				declaration: false,
				sourceMap: false,
				removeComments: true,
				target: 'es2020'
			}) : tsProject;

		return gulp.src(`${src}/**/*.ts`)
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(tsConfig())
			.pipe(sourcemaps.write('.', { sourceRoot: path.resolve(__dirname, '../..', src) }))
			.pipe(gulp.dest(out));
	};
}

/**
 * Watch task for development
 */
function watchTask(out, build = false, srcPath = 'src') {
	return () => {
		const tsConfig = build ? 
			ts.createProject(path.resolve(__dirname, '../../tsconfig.json'), {
				declaration: false,
				sourceMap: false,
				removeComments: true,
				target: 'es2020'
			}) : tsProject;

		return gulp.watch(`${srcPath}/**/*.ts`, { ignoreInitial: false })
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(tsConfig())
			.pipe(sourcemaps.write('.', { sourceRoot: path.resolve(__dirname, '../..', srcPath) }))
			.pipe(gulp.dest(out));
	};
}

module.exports = {
	transpileTask,
	compileTask,
	watchTask
};
