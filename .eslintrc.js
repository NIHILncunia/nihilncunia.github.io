module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react-hooks"
    ],
    "rules": {
        "no-console": 0,
        "no-unused-vars": 0,
        "semi": 2,
        "no-unexpected-multiline": 0,
        "no-empty": 1,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    }
};