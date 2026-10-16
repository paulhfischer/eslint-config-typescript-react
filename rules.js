// React rules of the Airbnb JavaScript Style Guide (https://github.com/airbnb/javascript), mapped to
// `@eslint-react/eslint-plugin` and `eslint-plugin-jsx-a11y-x`, on top of their `strict` configs.

export const react = {
    '@eslint-react/dom-no-missing-button-type': 'error',
    '@eslint-react/dom-no-missing-iframe-sandbox': 'error',
    '@eslint-react/dom-no-unsafe-target-blank': 'error',
    '@eslint-react/jsx-no-useless-fragment': 'error',
    '@eslint-react/no-array-index-key': 'error',
    '@eslint-react/no-unstable-context-value': 'error',
    '@eslint-react/no-unstable-default-props': 'error',
    '@eslint-react/no-unused-state': 'error',
};

export const a11y = {
    'jsx-a11y-x/anchor-is-valid': [
        'error',
        {
            components: ['Link'],
            specialLink: ['to'],
            aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
    ],
    'jsx-a11y-x/lang': 'error',
};

export const typeChecked = {
    '@eslint-react/no-unused-props': 'error',
    // allow async event handlers
    '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
    ],
};

export default {
    ...react,
    ...a11y,
};
