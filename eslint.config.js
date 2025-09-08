/*---------------------------------------------------------------------------------------------
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
);