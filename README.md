# ecommerce-common

Shared library for the ecommerce example application [here](github.com/kornsour/ecommerce-example)

## Dependencies

- `npm install typescript del-cli --save-dev`
  - `--save-dev` when you only want dependencies for development
  - They do not get installed when adding the package to another service

## Publishing the Package

- `npm version patch`
- `npm run build`
- `npm publish`
