# aws-lambda-starter
Starting point for AWS Lambda projects - includes create, deploy, invoke scripts as well as unit tests! Unit tests are in Jasmine right now but switching over to mocha or something else would be trivial.

## Getting Started
NOTE: Tests get ran by default before you create or deploy your lambda. See build.sh and the scripts in provisioning/. Also, all commands are run under the Lambda name `myLambda`. You can change the name in `package.json` - unfortunately you have to change it in 3 spots until TODO #1 gets done.

### Prerequisites
1. [AWS CLI](https://aws.amazon.com/cli/)
2. Execution Role ARN for your Lambda
3. Create a `config.json` based on `config.sample.json`. This file is gitignored by default because this is where you would put any api key's and other secret info that your lambda may need.

To run tests you'll want to install jasmine and watch globally
`npm install -g jasmine watch`

Then you can run tests while watching files for changes:
`npm run test:watch`

### Execution Role ARN(Amazon Resource Name)
Before you can create your Lambda you need to create an execution role. If you did any of the Lambda hello world tutorials in the AWS console you should already have a role created. Either way you need to goto the AWS Console -> Security & Identity -> IAM -> Roles. Get the ARN of `lambda_basic_execution` or create a new role based on `role.example.json` and get the ARN from that. The full ARN looks something like `arn:aws:iam::YOUR_ACCOUNT_ID:role/lambda_basic_execution`.

### Create Your Lambda
Run the create lambda script to create the Lambda via AWS Cli. This example creates a Lambda named "myLambda". From the project root dir run 
`npm run create arn:aws:iam::YOUR_ACCOUNT_ID:role/lambda_basic_execution`

### Test Your Lambda
Now that your lambda is live you can invoke it!
`npm run invoke {\"type\": \"sweet\"}` or test the error state without a type `npm run invoke {}`

### Deploy changes
After making some changes you'll probably want to deploy them...
`npm run deploy`

## Contributing
Improvements are welcome! Just fork, push your changes to a new branch, and create a pull request!

## TODO 
1. get lambda name from config.json so you don't have to always pass it in to the commands
