import eslintReact from '@eslint-react/eslint-plugin';
import { base, prettier, tsFiles, typescript } from '@paulhfischer/eslint-config-typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import { defineConfig } from 'eslint/config';

import rules, { typeChecked } from './rules.js';

export { base, prettier, tsFiles, typescript };

export const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];

export const react = defineConfig(
    {
        name: '@paulhfischer/react/javascript',
        files: jsFiles,
        extends: [eslintReact.configs.strict],
    },
    {
        name: '@paulhfischer/react/typescript',
        files: tsFiles,
        extends: [eslintReact.configs['strict-type-checked']],
        rules: typeChecked,
    },
    {
        name: '@paulhfischer/react/rules',
        files: [...jsFiles, ...tsFiles],
        extends: [jsxA11y.configs.strict],
        rules,
    },
);

const config = [...base, ...typescript, ...react, ...prettier];

export default config;
// returned by `require()`, so that CommonJS configs can use it directly
export { config as 'module.exports' };
