# Serverless Template for Alexa Skill by Typescript

This is a template of Serverless framework for Alexa skill.

## Overview

- A template of Serverless Framework app for Alexa skill by Typescript
- Including a sample skill implementation
- Build by webpack
- Ready for TDD, by [Jest](https://jestjs.io/) with [virtual-alexa](https://github.com/bespoken/virtual-alexa)
- Config file enable
- Support DynamoDB for Persistent Attributes. <br>(Ready for DynamoDB local by using [serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local))

## Requirements

- [Node.js](https://nodejs.org) 8.10 or lator
- [Serverless Framework](https://serverless.com/)
- AWS account
- Amazon Developer account

## Setup

### Create Alexa skill

Create your skill in [Alexa developper console](https://developer.amazon.com/alexa/console/ask).

### Install template and npm modules

Run the following command.<br>
You can create your serverless application for Alexa Skill, based on this template.

```bash
$ serverless install --url https://github.com/actindi/serverless-alexa-ts --name your-app-name
$ cd your-app-name
$ npm install
```

### Create Configuration files

Copy _config/config-template.yml_ to _config/config.yml_,
and modify config.yml for your skill.

```bash
$ cp config/config-template.yml config/config.yml
```

Next, create _.npmrc_ file by the following command.

```bash
$ echo 'skill_id = <your skill id>' > .npmrc
```

### Deploy Lambda function.

Deploy the lambda function by the following comman.

```bash
$ npm run sls:deploy
```

Go to AWS console of lambda functions, and check the arn of the lambda function.

If you don't know how to make the credential, see [Serverless Framework Commands \- AWS Lambda \- Config Credentials](https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/).

### Uplead skill model.

At first, you should run `ask-cli init` for initialize ask-cli. For details, please see [ask-cli document](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#init-command).

Run the following command, you can upload sample skill's sample model to Alexa.

```bash
$ npm ask:update-model
```

### Set endpoint url and test the sample skill

Open your skill console and Endpoint setting.
Select _AWS Lambda ARN_ and fill _Default Region_ by the arn of your lambda function.

Then, open _test_ tab, enabled the test for this skill.
and Input the invocation word `サンプルスキルを開いて`.
And you can test the sample skill in this template.

## Implement your request handlers

There are basically request hander implementations in _src/handlers_.
Please modify these files and add other handlers for your skill.

### Writing SSML

This template include [ssml-builder](https://github.com/mandnyc/ssml-builder) (with type difinition!).
You can make SSML speach text easily by using this library.
a tiny sample is in [FeelingIntentHandler.ts](src/handlers/FeelingIntentHandler.ts).

For details, please see [ssml-builder](https://github.com/mandnyc/ssml-builder).

### Interaction Model Management

You can manage Interaction Model JSON file of your Skill.

Then, you can get and update model by the following commands.

```bash
npm run ask:get-model    # get model json from Alexa console
npm run ask:update-model # put model json to console and rebuild  model
```

If you don't use **ja_JP**, please modify or add npm script of package.json for your skill language.

## Ready for test

### Using Jest test suite

This template includes Jest and virtual-alexa.
See a sample implementation in [alexa.spec.ts](__tests__/integrations/alexa.spec.ts).

To execute the test suite, use `npm test`.

**NOTICE:** virtual-alexa use model json so you have to run `npm run ask:get-model` before test.
( This template has a sample model json. )

### Using Debugger

If using Visual Studio Code, you can use debugger easy.
This template has sample config. see _.vscode/launch.json_.

## DynamoDB

If you would like to use DynamoDB to persist attributes,
uncomment the code for DynamoDB in _index.ts_ and _serverless.yaml_.

### Local DynamoDB

When testing and debugging, you can use local DynamoDB

Run the following command to install local DynamoDB.

```bash
$ npm run sls:dynamodb:install
```

Run the following command to install local DynamoDB.

```bash
$ npm run sls:dynamodb:start
```

For details, please see [Serverless Dynamodb Local Plugin](https://github.com/99xt/serverless-dynamodb-local)

## License

MIT
