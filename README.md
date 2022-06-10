# ecommerce-common

Shared library for services of the [ecommerce example application](github.com/kornsour/ecommerce-example)

## Dependencies

- `npm install typescript del-cli --save-dev`
  - `--save-dev` when you only want dependencies for development
  - They do not get installed when adding the package to another service
- `npm install express express-validator cookie-session jsonwebtoken @types/cookie-session @types/express @types/jsonwebtoken`

## Publishing the Package

- Commit changes with git
- `npm version patch`
  - For production use, follow [semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
- `npm run build`
- `npm publish`

## Update package for service

Back in the ecommerce-app, run `npm update @kornorg/common` for the desired service
