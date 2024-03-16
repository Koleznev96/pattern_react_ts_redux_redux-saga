module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 8,
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018,
				ecmaFeatures: {
					jsx: true,
				},
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:react/recommended',
				'plugin:react/jsx-runtime',
				'plugin:react-redux/recommended',
				'plugin:redux-saga/recommended',
				'eslint-config-react-app',
				'plugin:import/recommended',
				'plugin:no-expectsaga-without-return/recommended',
				'eslint-config-prettier',
				'plugin:css-modules/recommended',
			],
			plugins: [
				'react',
				'@typescript-eslint',
				'redux-saga',
				'immutablejs',
				'import',
				'no-expectsaga-without-return',
				'@jambit/typed-redux-saga',
				'css-modules',
				'check-file',
			],
			rules: {
				'check-file/filename-blacklist': [
					'error',
					{
						'*.test.[t|j]s?(x)': '*.spec.[t|j]s?(x)',
					},
				],
				curly: 'warn',
				'no-debugger': 'warn', // is needed?
				radix: ['error', 'always'],
				'no-console': ['warn', {allow: ['warn', 'error']}],
				'prefer-spread': 'warn',
				'prefer-const': 'warn',
				'immutablejs/no-native-map-set': 'error',
				'react/boolean-prop-naming': ['warn', {rule: '^(is|has|can|are)[A-Z]([A-Za-z0-9]?)+'}],
				'import/namespace': 'off',
				'import/default': 'off',
				'import/named': 'off',
				'import/no-named-as-default-member': 'off',
				'import/no-named-as-default': 'off',
				'import/no-unresolved': 'off',
				'import/no-webpack-loader-syntax': 'off',
				'@jambit/typed-redux-saga/use-typed-effects': 'error',
				'@jambit/typed-redux-saga/delegate-effects': 'error',
				'no-duplicate-imports': 'off',
				'react-redux/prefer-separate-component-file': 'off',
				'react/jsx-key': 'warn',
				'@typescript-eslint/no-empty-function': 'warn',
				'@typescript-eslint/no-empty-interface': 'warn',
				'import/no-anonymous-default-export': 'warn',
				'react-redux/useSelector-prefer-selectors': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'no-restricted-imports': [
					'error',
					{
						paths: ['@material-ui', '@mui/icons-material', '@mdi/js'],
						patterns: [
							{
								group: ['@material-ui/*', '@mdi/js/*'],
								message: 'Do not use mui v4 and mdi',
							},
							{
								group: ['../'],
								message: 'Use an absolute path instead',
							},
						],
					},
				],
				'css-modules/no-unused-class': [2, {camelCase: 'only'}],
				'css-modules/no-undef-class': [2, {camelCase: 'only'}],
				'no-restricted-syntax': [
					'warn',
					{
						selector:
							'CallExpression[typeParameters] > MemberExpression[object.type=ThisExpression][property.name=createAction]',
						message:
							"Please, don't use 'createAction' with explicitly speacified type. Instead, pass properly typed prepareAction function",
					},
				],
				'no-nested-ternary': 'error',
				// TODO: fix later
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/ban-types': 'off',
				'react-redux/connect-prefer-named-arguments': 'off',
				'react-redux/no-unused-prop-types': 'off',
				'react/display-name': 'off',
			},
			settings: {
				'import/internal-regex': '^src/',
			},
			overrides: [
				{
					files: ['*.spec.ts', '*.spec.tsx'],
					env: {
						jest: true,
					},
					rules: {
						'redux-saga/no-unhandled-errors': 'off',
						'@jambit/typed-redux-saga/use-typed-effects': 'off',
						'@jambit/typed-redux-saga/delegate-effects': 'off',
					},
				},
			],
		},
		{
			files: '*.json',
			plugins: ['i18n-json', 'local'],
			rules: {
				'i18n-json/valid-json': 'error',
				'i18n-json/sorted-keys': [
					'error',
					{
						order: 'asc',
						indentSpaces: 2,
					},
				],
			},
		},
		{
			files: '*.json',
			plugins: ['json'],
			rules: {
				'json/duplicate-key': 'warn',
			},
		},
	],
};
