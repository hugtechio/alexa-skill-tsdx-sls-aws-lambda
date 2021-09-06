# Alexa-skill-tsdx-sls-aws-lambda 
This is a repository template to deploy only lambda function for alexa skill by Serverless Framework.

## Description
This template is pre-build template for Alexa Skill by using TSDX and Serverless Framework.

## Do the first!

- rename service name from **alexa-skill-tsdx-sls-aws-lambda** to **YOUR_SERVICE_NAME** in **serverless.yml** and **package.json**
- rename the **author** in **package.json**
- Set the AWS Credential to GitHub secrets **(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)**

## Background
In Alexa Conversations. Build time takes long. So sometimes when Building model and backend code together, like ask-cli, It is a bit inconvenience.

## Language
Typescript 

## Commands
```
  "start": "tsdx watch",
  "build": "tsdx build",
  "test": "tsdx test",
  "watch": "tsdx test --watch",
  "debug": "tsdx test --debug",
  "lint": "tsdx lint",
  "prepare": "tsdx build",
  "size": "size-limit",
  "analyze": "size-limit --why",
  "deploy:dev": "tsdx build && sls deploy",
  "deploy:prod": "tsdx build && sls deploy -s production"
```

## Continuous Integration
This template includes a GitHub action for deployment.

Set these values as GitHub.secrets to your repository.

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY


