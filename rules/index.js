module.exports = {
    "extends": [
        "eslint:recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "__": true
    },
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "rules": {
        "linebreak-style": 0,
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "arrow-parens": "off",
        "curly": ["error"],
        "object-curly-spacing": "off",
        "spaced-comment": "off",
        "no-confusing-arrow": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "prefer-destructuring": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-props-no-spreading": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "jsx-quotes": ["off", "prefer-single"],
        "@typescript-eslint/no-var-requires": "off",
        "global-require": "off",
        "no-underscore-dangle": "off",
        "react/no-array-index-key": "off",
        "no-alert": "off",
        "object-curly-newline": "off",
        "react/button-has-type": "off",
        "prefer-template": "off",
        "react/require-default-props": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/prefer-default-export": "off",
        "no-useless-constructor": "off",
        "class-methods-use-this": "off",
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.ts", "**/*.test.tsx"]}],
        "react-hooks/exhaustive-deps": ["warn", {
            "additionalHooks": "^use(Async|AsyncFn|AsyncRetry|Debounce|UpdateEffect|IsomorphicLayoutEffect|DeepCompareEffect|ShallowCompareEffect)$"
        }],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "max-len": [
            "error",
            {
                "code": 150,
                "tabWidth": 4
            }
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "legacyDecorators": true
        }
    }
};
