/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');

console.log('\x1b[1;32m*** Running Nirmana IDE hygiene checks...\x1b[0;0m');

// Check for required files
const requiredFiles = [
	'package.json',
	'tsconfig.json',
	'vite.config.ts',
	'electron-builder.json5'
];

requiredFiles.forEach(file => {
	const filePath = path.join(root, file);
	if (!fs.existsSync(filePath)) {
		console.error(`\x1b[1;31m*** Missing required file: ${file}\x1b[0;0m`);
		process.exit(1);
	}
});

// Check for required directories
const requiredDirs = [
	'src',
	'build',
	'resources',
	'extensions'
];

requiredDirs.forEach(dir => {
	const dirPath = path.join(root, dir);
	if (!fs.existsSync(dirPath)) {
		console.error(`\x1b[1;31m*** Missing required directory: ${dir}\x1b[0;0m`);
		process.exit(1);
	}
});

// Run TypeScript check
console.log('Running TypeScript check...');
try {
	execSync('npx tsc --noEmit --skipLibCheck', { 
		cwd: root, 
		stdio: 'inherit' 
	});
	console.log('✓ TypeScript check passed');
} catch (error) {
	console.error('\x1b[1;31m*** TypeScript check failed\x1b[0;0m');
	process.exit(1);
}

// Run ESLint
console.log('Running ESLint...');
try {
	execSync('node build/eslint', { 
		cwd: root, 
		stdio: 'inherit' 
	});
	console.log('✓ ESLint check passed');
} catch (error) {
	console.error('\x1b[1;31m*** ESLint check failed\x1b[0;0m');
	process.exit(1);
}

// Check package.json structure
console.log('Checking package.json structure...');
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

const requiredScripts = [
	'dev',
	'build',
	'package',
	'compile',
	'lint',
	'clean'
];

requiredScripts.forEach(script => {
	if (!packageJson.scripts || !packageJson.scripts[script]) {
		console.error(`\x1b[1;31m*** Missing required script: ${script}\x1b[0;0m`);
		process.exit(1);
	}
});

console.log('✓ Package.json structure check passed');

// Check for proper version format
const version = packageJson.version;
if (!/^\d+\.\d+\.\d+/.test(version)) {
	console.error(`\x1b[1;31m*** Invalid version format: ${version}\x1b[0;0m`);
	process.exit(1);
}

console.log('✓ Version format check passed');

console.log('\x1b[1;32m*** All hygiene checks passed successfully!\x1b[0;0m');
