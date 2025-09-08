/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { ESLint } = require('eslint');
const path = require('path');
const fs = require('fs');

async function runESLint() {
	const root = path.dirname(path.dirname(__dirname));
	const eslintConfigPath = path.join(root, 'eslint.config.js');
	
	// Create default ESLint config if it doesn't exist
	if (!fs.existsSync(eslintConfigPath)) {
		const defaultConfig = `/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nirmana Team. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
		},
		rules: {
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-inferrable-types': 'off',
			'prefer-const': 'error',
			'no-var': 'error',
		},
		ignores: [
			'node_modules/**',
			'dist/**',
			'dist-electron/**',
			'out/**',
			'.build/**',
			'release/**',
		],
	}
);`;
		
		fs.writeFileSync(eslintConfigPath, defaultConfig);
		console.log('Created default ESLint configuration');
	}

	const eslint = new ESLint({
		cwd: root,
		fix: process.argv.includes('--fix')
	});

	// Check if files exist before linting
	const glob = require('glob');
	const patterns = ['src/**/*.{js,ts,tsx}', 'build/**/*.{js,ts,tsx}', 'extensions/**/*.{js,ts,tsx}'];
	const files = [];
	
	patterns.forEach(pattern => {
		const matches = glob.sync(pattern, { cwd: root });
		files.push(...matches);
	});
	
	if (files.length === 0) {
		console.log('No files found to lint');
		return;
	}
	
	const results = await eslint.lintFiles(files);
	
	if (process.argv.includes('--fix')) {
		await ESLint.outputFixes(results);
	}

	const formatter = await eslint.loadFormatter('compact');
	const resultText = formatter.format(results);

	if (resultText) {
		console.log(resultText);
		process.exit(1);
	} else {
		console.log('ESLint: No issues found');
	}
}

runESLint().catch(error => {
	console.error('ESLint error:', error);
	process.exit(1);
});
