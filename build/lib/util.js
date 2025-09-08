/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const rimraf = promisify(require('rimraf'));

/**
 * Utility functions for Gulp tasks
 */
const util = {
	/**
	 * Remove files/directories
	 */
	rimraf: (path) => {
		return () => rimraf(path);
	},

	/**
	 * Set executable bit on files
	 */
	setExecutableBit: (patterns) => {
		const through = require('through2');
		const minimatch = require('minimatch');
		return through.obj(function (file, enc, callback) {
			if (patterns.some(pattern => minimatch(file.relative, pattern))) {
				file.stat = file.stat || {};
				file.stat.mode = (file.stat.mode || 0) | 0o111;
			}
			callback(null, file);
		});
	},

	/**
	 * Fix Windows directory permissions
	 */
	fixWin32DirectoryPermissions: () => {
		if (process.platform !== 'win32') {
			return require('through2').obj();
		}

		const through = require('through2');
		return through.obj(function (file, enc, callback) {
			if (file.isDirectory()) {
				fs.chmod(file.path, 0o755, callback);
			} else {
				callback(null, file);
			}
		});
	},

	/**
	 * Skip directories
	 */
	skipDirectories: () => {
		const through = require('through2');
		return through.obj(function (file, enc, callback) {
			if (file.isDirectory()) {
				callback();
			} else {
				callback(null, file);
			}
		});
	},

	/**
	 * Get version from package.json
	 */
	getVersion: () => {
		const packageJson = require('../../package.json');
		return packageJson.version;
	},

	/**
	 * Get product information
	 */
	getProduct: () => {
		try {
			return require('../../product.json');
		} catch (e) {
			return {
				nameShort: 'Nirmana',
				nameLong: 'Nirmana IDE',
				applicationName: 'nirmana-ide',
				version: util.getVersion()
			};
		}
	}
};

module.exports = util;
