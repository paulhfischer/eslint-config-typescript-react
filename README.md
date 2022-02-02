# eslint-config-typescript-react

## Setup

```console
npm install --save-dev @paulhfischer/eslint-config-typescript-react
```

## Commands

Use `eslint.config.js` in an ESM project:

```js
import config from '@paulhfischer/eslint-config-typescript-react';

export default config;
```

For pre-commit, use `eslint.config.cjs` so Node can resolve packages from the hook environment:

```js
module.exports = require('@paulhfischer/eslint-config-typescript-react');
```

Put `"@paulhfischer/prettier-config"` in `.prettierrc`.

```console
npm exec -- eslint --fix <PATH>...
```

Type-aware rules use the nearest `tsconfig.json`; install the consumer project dependencies.

### pre-commit

```yaml
- repo: https://github.com/paulhfischer/eslint-config-typescript-react
  rev: v2.0.0
  hooks:
      - id: lint
```
