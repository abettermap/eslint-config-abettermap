# eslint-config-abettermap

Preferred config for ESLint, TypeScript, React, and Prettier.

## Installation

Assumes you already have these installed in your project:

- `eslint`
- `prettier`
- `typescript`

```bash
# The config module
npm i -D eslint-config-abettermap

# And the deps
npm i -D \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

If using `yarn`, swap out `npm i` with `yarn add`.

## Usage

In your _.eslintrc.js_ file:

```javascript
module.exports = {
  extends: 'abettermap',
  // ...the rest of your config
}
```

## TODOs

- [ ] [Shareable Prettier config](https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3)
