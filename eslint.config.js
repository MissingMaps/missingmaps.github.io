import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        
        // jQuery
        $: 'readonly',
        jQuery: 'readonly',
        
        // D3.js
        d3: 'readonly',
        
        // Leaflet
        L: 'readonly',
        
        // PapaParse
        Papa: 'readonly',
        
        // Foundation
        Foundation: 'readonly',
        
        // Luxon
        luxon: 'readonly'
      }
    },
    rules: {
      // Modern JavaScript best practices
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'prefer-template': 'error',
      
      // Code quality
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-console': ['warn', { 'allow': ['error'] }],
      'eqeqeq': 'error',
      'curly': ['error', 'all'],
      
      // Style
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'space-before-function-paren': ['error', 'always']
    }
  },
  {
    files: ['gulpfile.js', 'updatedep.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        // Node.js globals
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      'no-console': 'off' // Allow console in build scripts
    }
  }
];