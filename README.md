# eslint-config-typescript-react

ESLint-config for typed React projects. It extends
[`eslint-config-typescript`](https://github.com/paulhfischer/eslint-config-typescript) with

- the `strict` configs of [`@eslint-react/eslint-plugin`](https://eslint-react.xyz) (including
  the rules of hooks) and
  [`eslint-plugin-jsx-a11y-x`](https://github.com/es-tooling/eslint-plugin-jsx-a11y-x) and
- the React rules of the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
  mapped to these plugins (see [`rules.js`](rules.js)).

### Usage

#### pre-commit

1. Add the hook to your `.pre-commit-config.yaml`:

    ```yaml
    - repo: https://github.com/paulhfischer/eslint-config-typescript-react
      rev: v2.0.0
      hooks:
          - id: lint
    ```

2. Add the config to your `eslint.config.cjs`:

    ```js
    module.exports = require('@paulhfischer/eslint-config-typescript-react');
    ```

    or, to adjust it:

    ```js
    const config = require('@paulhfischer/eslint-config-typescript-react');

    module.exports = [...config, { rules: { 'jsx-a11y-x/no-autofocus': 'off' } }];
    ```

    _Note: The config has to be a CommonJS-file using `require()`, as ES modules can't import
    packages from the environment pre-commit installs the hook into._

3. Add the prettier configuration to your `.prettierrc`:

    ```json
    "@paulhfischer/prettier-config"
    ```

_Note: Type-aware rules use the `tsconfig.json` closest to each file and need the dependencies of
your project to be installed (otherwise their types can't be resolved)._

#### npm

1. Install via `npm`:

    ```
    npm install --save-dev @paulhfischer/eslint-config-typescript-react
    ```

    _Note: Have a look at the `.pre-commit-hooks.yaml`-file for a list of all peer-dependencies._

2. Add the config to your `eslint.config.js`:

    ```js
    import config from '@paulhfischer/eslint-config-typescript-react';

    export default config;
    ```

3. Add the prettier configuration to your `.prettierrc` (or the `prettier`-key of your
   `package.json`):

    ```json
    "@paulhfischer/prettier-config"
    ```

### Migrating from version 1

- Version 2 requires ESLint 10 and flat configs. Replace your `.eslintrc`-file or the
  `eslintConfig`-key of your `package.json` with an `eslint.config.cjs`-file (see above).
- Rules were renamed: `import/…` becomes `import-x/…`, `react/…` and `react-hooks/…` become
  `@eslint-react/…` and `jsx-a11y/…` becomes `jsx-a11y-x/…`. The React version is detected
  automatically, so `settings.react.version` is no longer needed.
