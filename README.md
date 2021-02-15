# npm-package-template
This is a basic npm package template that allows for faster package creation. This is build on rollup as the compiler.

## Basic Project Setup
This project will need to to have the following commands ran uppon starting up your package.

`npm i -g typescript`
Since this project is based off typescript it is recommended to upgrade/install your typescript version that you have installed globally. This may not be necessary if you have used Typescript before, if you not you will need to to this.

`npm i`
Ths command will iterate through package.json and install all of the necessary packages to compile. By default this template requires no dependencies which allows for minimized files.

## `npm start`
Running this command will run rollup comipler to build your '/dist/' folder. This will be what gets published up to npm repository for others to pull down and use your project.

If you need to use this on a internal project that you do not wany others to find on npmjs website make sure to use a <a href='https://docs.npmjs.com/cli/v7/using-npm/scope' target="_blank">scoped</a> repository

It would be useful to read up on 'npm link' to learn how to you can develop on a project and test real time. Click  <a href='https://docs.npmjs.com/cli/v6/commands/npm-link' target='_blank'>Here</a> to learn more about it.

## `npm build`
This runs the the traditional typescipt compiler which is based off of your `tsconfig.json`, if you are looking to publish up to npm repository, I recommend using the `npm start` command which runs the rollup compiler.

## `npm run createDocs`
This is a very useful tool, that is similar to storybook but slightly different. This generates all of the documention of functions components, and other useful tools.

You can read more about typedocs <a href='https://typedoc.org/guides/doccomments/' target='_blank'>here</a></br>

Because we are using typescript anyways and typedocs, I recommend you and your team follow <a href='https://jsdoc.app/' target='_blank'>Jsdoc's</a>.

## `npm run precommit`
This is a command that will be ran based off of your .eslint.js file. This is currently based off of Google standards, but it can be customized as needed. <br/>

You may find it useful to be configured with <a href='https://www.npmjs.com/package/husky' target='_blank'>Husky</a>, this way it will be enforced every code commit.

## `npm test`
This will run the unit tests that are currently setup to run with Mocha and Chai. 