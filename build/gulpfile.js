/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

// Increase max listeners for event emitters
require('events').EventEmitter.defaultMaxListeners = 100;

const gulp = require('gulp');
const util = require('./lib/util');
const task = require('./lib/task');
const { transpileTask, compileTask, watchTask } = require('./lib/compilation');
const { compileExtensionsTask, watchExtensionsTask, compileExtensionMediaTask } = require('./gulpfile.extensions');

// Fast compile for development time
const compileClientTask = task.define('compile-client', task.series(util.rimraf('out'), compileTask('src', 'out', false)));
gulp.task('compile-client', compileClientTask.fn);

const watchClientTask = task.define('watch-client', task.series(util.rimraf('out'), watchTask('out', false)));
gulp.task('watch-client', watchClientTask.fn);

// All
const _compileTask = task.define('compile', task.parallel(compileClientTask, compileExtensionsTask, compileExtensionMediaTask));
gulp.task('compile', _compileTask.fn);

const watchAllTask = task.define('watch', task.parallel(watchClientTask, watchExtensionsTask));
gulp.task('watch', watchAllTask.fn);

// Default
gulp.task('default', _compileTask.fn);

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
	process.exit(1);
});

// Load all the gulpfiles only if running tasks other than the editor tasks
require('glob').sync('gulpfile.*.js', { cwd: __dirname })
	.forEach(f => require(`./${f}`));
