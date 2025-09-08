/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const nodeVersion = /^(\d+)\.(\d+)\.(\d+)/.exec(process.versions.node);
const majorNodeVersion = parseInt(nodeVersion[1]);
const minorNodeVersion = parseInt(nodeVersion[2]);
const patchNodeVersion = parseInt(nodeVersion[3]);

// Check Node.js version
if (!process.env['NIRMANA_SKIP_NODE_VERSION_CHECK']) {
	if (majorNodeVersion < 18 || (majorNodeVersion === 18 && minorNodeVersion < 17)) {
		console.error('\x1b[1;31m*** Please use Node.js v18.17.0 or later for development.\x1b[0;0m');
		throw new Error();
	}
}

// Check for yarn usage
if (process.env['npm_execpath'] && process.env['npm_execpath'].includes('yarn')) {
	console.error('\x1b[1;31m*** Yarn is not supported in this repository. Please use npm instead.\x1b[0;0m');
	throw new Error();
}

const path = require('path');
const fs = require('fs');
const os = require('os');

// Check architecture mismatch
if (process.arch !== os.arch()) {
	console.error(`\x1b[1;31m*** ARCHITECTURE MISMATCH: The node.js process is ${process.arch}, but your OS architecture is ${os.arch()}.\x1b[0;0m`);
	console.error(`\x1b[1;31m*** This can greatly increase the build time of Nirmana IDE.\x1b[0;0m`);
}

// Platform-specific checks
if (process.platform === 'win32') {
	if (!hasSupportedVisualStudioVersion()) {
		console.error('\x1b[1;31m*** Invalid C/C++ Compiler Toolchain. Please check prerequisites.\x1b[0;0m');
		console.error('\x1b[1;31m*** If you have Visual Studio installed in a custom location, you can specify it via the environment variable:\x1b[0;0m');
		console.error('\x1b[1;31m*** set vs2022_install=<path> (or vs2019_install for older versions)\x1b[0;0m');
		throw new Error();
	}
}

function hasSupportedVisualStudioVersion() {
	const fs = require('fs');
	const path = require('path');
	
	const supportedVersions = ['2022', '2019'];
	const availableVersions = [];
	
	for (const version of supportedVersions) {
		// Check environment variable first (explicit override)
		let vsPath = process.env[`vs${version}_install`];
		if (vsPath && fs.existsSync(vsPath)) {
			availableVersions.push(version);
			break;
		}

		// Check default installation paths
		const programFiles86Path = process.env['ProgramFiles(x86)'];
		const programFiles64Path = process.env['ProgramFiles'];

		const vsTypes = ['Enterprise', 'Professional', 'Community', 'Preview', 'BuildTools', 'IntPreview'];
		if (programFiles64Path) {
			vsPath = `${programFiles64Path}/Microsoft Visual Studio/${version}`;
			if (vsTypes.some(vsType => fs.existsSync(path.join(vsPath, vsType)))) {
				availableVersions.push(version);
				break;
			}
		}

		if (programFiles86Path) {
			vsPath = `${programFiles86Path}/Microsoft Visual Studio/${version}`;
			if (vsTypes.some(vsType => fs.existsSync(path.join(vsPath, vsType)))) {
				availableVersions.push(version);
				break;
			}
		}
	}

	return availableVersions.length > 0;
}

console.log('\x1b[1;32m*** Nirmana IDE preinstall checks passed successfully.\x1b[0;0m');
