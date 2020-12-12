# Koats - TypeScript Koa Template

## Overview

This is a starter template for building a basic koa.js website with server side rendering. It
is typescript based. I got tired of building this set of tools any time I wanted to kick of a simple
website, so I created this template.

## Run Stuff

- development: `$ npm run dev` _(uses nodemon/ts-node to restart on changes with `NODE_ENV=local_dev`)_
- build: `$ npm run build` _(cleans and compiles TypeScript to `dist` directory)_
- production run: `$ npm start` _(runs built code with `NODE_ENV=production`)_

## Stuff Included (third-party)

- [koa](https://koajs.com/): well supported, extensible, simple web framework
- [koa-static](https://www.npmjs.com/package/koa-static): serve static assets with koa middleware
- [koa-hbs](https://www.npmjs.com/package/koa-hbs/v/1.0.0): handlebars view template middleware for koa
- [koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser): body/form parsing of requests
- [@koa/router](https://www.npmjs.com/package/koa-router): router middleware for koa
- [config](https://www.npmjs.com/package/config): dynamic and environmentally aware configuration
- [pino](https://www.npmjs.com/package/pino): low overhead, extensible, well supported logger
- [koa-pino-logger](https://www.npmjs.com/package/koa-pino-logger): koa/pino logging middleware
- [pino-tiny](https://www.npmjs.com/package/pino-tiny): simple pino formatter for local dev
- [Bootstrap 5](https://getbootstrap.com/): css framework
- [standardx](https://www.npmjs.com/package/standardx): linting standard for typescript
- [prettier](https://www.npmjs.com/package/prettier): make pretty code
- [ts-node](https://www.npmjs.com/package/ts-node): run TypesScript in without compiling first
- [nodemon](https://www.npmjs.com/package/nodemoe): run app and restart on changes
- [typescript](https://www.npmjs.com/package/typescript): compile TypeScript into JavaScript (and all the necessary `@types/*` libs)

## Built-in

- error handling middleware
- graceful startup/shutdown

## Notes

- add a `local_dev.ts` to the config directory to set up your
  local dev environment. `default.ts` is the default but
  should not contain secrets and local specific stuffs.
  `local_dev.ts` is "git ignored", and `default.ts` is not and
  will be checked in.
