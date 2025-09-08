/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { Transform } = require('stream');
const { promisify } = require('util');

/**
 * Task definition utilities
 */
class Task {
	constructor(name, fn) {
		this.name = name;
		this.fn = fn;
		this.taskName = name;
	}

	/**
	 * Define a task
	 */
	static define(name, fn) {
		return new Task(name, fn);
	}

	/**
	 * Run tasks in series
	 */
	static series(...tasks) {
		return (done) => {
			const runTask = (index) => {
				if (index >= tasks.length) {
					done();
					return;
				}

				const task = tasks[index];
				if (typeof task === 'function') {
					task((err) => {
						if (err) {
							done(err);
							return;
						}
						runTask(index + 1);
					});
				} else if (task && typeof task.fn === 'function') {
					task.fn((err) => {
						if (err) {
							done(err);
							return;
						}
						runTask(index + 1);
					});
				} else {
					runTask(index + 1);
				}
			};
			runTask(0);
		};
	}

	/**
	 * Run tasks in parallel
	 */
	static parallel(...tasks) {
		return (done) => {
			let completed = 0;
			let hasError = false;

			if (tasks.length === 0) {
				done();
				return;
			}

			const checkComplete = (err) => {
				if (hasError) return;
				if (err) {
					hasError = true;
					done(err);
					return;
				}
				completed++;
				if (completed === tasks.length) {
					done();
				}
			};

			tasks.forEach(task => {
				if (typeof task === 'function') {
					task(checkComplete);
				} else if (task && typeof task.fn === 'function') {
					task.fn(checkComplete);
				} else {
					checkComplete();
				}
			});
		};
	}
}

/**
 * Stream task utilities
 */
class StreamTask extends Transform {
	constructor(options = {}) {
		super({ objectMode: true });
		this.options = options;
	}

	_transform(file, encoding, callback) {
		callback(null, file);
	}
}

module.exports = {
	define: Task.define,
	series: Task.series,
	parallel: Task.parallel,
	StreamTask
};
