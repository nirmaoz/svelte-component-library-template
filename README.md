*Psst — looking for an app template? Go here --> [sveltejs/template](https://github.com/sveltejs/template)*

---

# svelt-component-library-template

A base for building shareable Svelte component library. Clone it with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit nirmaoz/svelte-component-library-template my-new-component
cd my-new-component
npm install # or yarn
```

Your component's source code lives in `src/Component.svelte`.

You can create a package that exports multiple components by adding them to the `src` directory and editing `src/index.js` to reexport them as named exports.

## This template includes:

* Svelte Component
* Testing using svelte-testing-library + Jest
* Storybook
* Rollup, configured to build .js (umd), .min.js (iife), .mjs (es)

## Setting up

* Run `npm init` (or `yarn init`)
* Replace this README with your own

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

### Based on sveltejs/component-template
I couldn't find an opinionated components library template to my liking, so I used [sveltejs/component-template](https://github.com/sveltejs/component-template) as base. And then I added minified build configuration using terser plugin + tests + storybook.

### Testing
Comes with tests out of the box using [svelte-testing-library](https://github.com/testing-library/svelte-testing-library) + [Jest](https://github.com/facebook/jest).

To Run tests:
```bash
npm test # or yarn
```

### Storybook
To serve development build:
```bash
npm run storybook
```

To build static storybook site (default output folder is /docs for easly sharing on github pages):
```bash
npm run build-storybook
```