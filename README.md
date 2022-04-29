# minimal reproduciton repo

## Setup
```
npm install
```

## See the issue your self

1. Open `src/main.js`
2. Try to Ctrl + Click the diffrent imports
3. Observe that non-ts/non-js aliased imports do not support Ctrl + click to go to definition.

## Issue

In VS Code, since [the May 2021 relase](https://code.visualstudio.com/updates/v1_57#_go-to-definition-for-non-jsts-files), 
when you import non-TS/non-JS files like so, you can use <kbd>Ctrl</kbd> + <kbd>Click</kbd> to go to definition.

```js
import App from './App.vue'; // ctrl + click works
```

If you <kbd>Ctrl</kbd> + <kbd>Click</kbd> to go to the file, it works! 😃

However, if you go to import using [a webpack alias](https://code.visualstudio.com/docs/languages/jsconfig#_using-webpack-aliases), it does not work. 

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

```js
// src/main.js
import App from "@/App.vue"; // ctrl + click does not work
```

In this case, you can't <kbd>Ctrl</kbd> + <kbd>Click</kbd> to go through to the definition. 

Imports of another .ts/.js file, however, does work:

```js
// src/main.js
import router from "@/plugins/router.js" // ctrl + click works :)
```

This works, because of the `jsconfig.json` above. 