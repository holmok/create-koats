# KOATS - a generator to create a Koa Typescript Web Server Template

## To create a new project

1. Create a directory for your projects `$ mkdir my-project`
2. Change directory into your project: `$ cd my-project`
3. Run: `$ npm init koats`
4. Start the dev server locally with: `$ npm run dev`
5. Use this to start a great web site using Koa and Typescript

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
