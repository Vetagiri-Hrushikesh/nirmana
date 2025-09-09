/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '../..');

console.log('\x1b[1;32m*** Running Nirmana IDE postinstall tasks...\x1b[0;0m');

// Create necessary directories
const directories = [
	'out',
	'.build',
	'.build/extensions',
	'dist',
	'dist-electron',
	'release'
];

directories.forEach(dir => {
	const fullPath = path.join(root, dir);
	if (!fs.existsSync(fullPath)) {
		fs.mkdirSync(fullPath, { recursive: true });
		console.log(`Created directory: ${dir}`);
	}
});

// Copy default extensions if they don't exist
const extensionsDir = path.join(root, 'extensions');
if (!fs.existsSync(extensionsDir)) {
	fs.mkdirSync(extensionsDir, { recursive: true });
	
	// Create default component library structure
	const componentLibraryDir = path.join(extensionsDir, 'component-library');
	fs.mkdirSync(componentLibraryDir, { recursive: true });
	
	// Create package.json for component library
	const componentPackageJson = {
		name: 'nirmana-component-library',
		version: '1.0.0',
		description: 'Default component library for Nirmana IDE',
		main: 'index.js',
		components: []
	};
	
	fs.writeFileSync(
		path.join(componentLibraryDir, 'package.json'),
		JSON.stringify(componentPackageJson, null, 2)
	);
	
	console.log('Created default component library structure');
}

// Create default resources if they don't exist
const resourcesDir = path.join(root, 'resources');
if (!fs.existsSync(resourcesDir)) {
	fs.mkdirSync(resourcesDir, { recursive: true });
	
	// Create subdirectories
	const subdirs = ['icons', 'themes', 'templates', 'mac', 'win'];
	subdirs.forEach(subdir => {
		fs.mkdirSync(path.join(resourcesDir, subdir), { recursive: true });
	});
	
	console.log('Created default resources structure');
}

// Create product.json if it doesn't exist
const productJsonPath = path.join(root, 'product.json');
if (!fs.existsSync(productJsonPath)) {
	const productJson = {
		nameShort: 'Nirmana',
		nameLong: 'Nirmana IDE',
		applicationName: 'nirmana-ide',
		version: require(path.join(root, 'package.json')).version,
		description: 'Cross-platform visual app creation IDE for rapid development',
		homepage: 'https://nirmana.dev',
		repository: {
			type: 'git',
			url: 'https://github.com/nirmana/nirmana.git'
		},
		license: 'MIT',
		author: 'Nirmana Team'
	};
	
	fs.writeFileSync(productJsonPath, JSON.stringify(productJson, null, 2));
	console.log('Created product.json');
}

console.log('\x1b[1;32m*** Nirmana IDE postinstall tasks completed successfully.\x1b[0;0m');
