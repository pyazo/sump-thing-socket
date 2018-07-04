const path = require('path');

module.exports = {
    "extends": "airbnb/base",
    "plugins": [
        "import",
        "babel"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 7,
    },
    "env": {
      "node": true,
      "browser": true,
      "mocha": true,
      "es6": true
    },
    "globals": {
      "_": true,
      "expect": true,
      "request": true,
    },
    "rules": {
      "no-warning-comments": "off",
      "no-console": "off",
      "import/no-unresolved": [
         "error",
         {
           "ignore": [ 'src/', 'lib/', 'middleware/', 'helpers/' ]
         }
       ],
     "import/extensions": "off",
     "quotes": [
       "error",
       "single",
       {
         "allowTemplateLiterals": true,
       }
     ],
     "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }]
    },
  };
