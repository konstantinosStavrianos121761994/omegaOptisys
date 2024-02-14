/* eslint-disable camelcase */
import { Stack, StackProps, aws_lambda, Duration, aws_ec2, aws_iam, aws_events, aws_apigateway, aws_cognito, aws_logs, aws_events_targets } from 'aws-cdk-lib';
import { table } from 'console';
import { Construct } from 'constructs';
import * as path from 'path';
import * as events from 'aws-cdk-lib/aws-events';


/**
 * @summary The properties for the APIProps class.
 */
export interface PowerFlowsStackProps extends StackProps {
  readonly userPool?: aws_cognito.UserPool;
  readonly environment: string;
  readonly vpc?: aws_ec2.Vpc;
}

export class PowerFlowsStack extends Stack {
  // public readonly real_time_power_flow: aws_lambda.Function;
  // public readonly power_flow_historical: aws_lambda.Function;
  // public readonly lambda_auth: aws_lambda.Function;
  // public readonly api: aws_apigateway.RestApi;
  // public readonly eventRule: aws_events.Rule;


  constructor(scope: Construct, id: string, props: PowerFlowsStackProps) {
    super(scope, id, props);

    const {
      environment: env
    } = props;


    // this.real_time_power_flow = new aws_lambda.DockerImageFunction(this, `${env}-real-time-power-flow`, {
    //   functionName: `real-time-power-flow-${env}`,
    //   code: aws_lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../../services/real-time-power-flow'), {
    //   }),
    //   timeout: Duration.minutes(3),
    //   memorySize: 256,
    //   environment: {
    //     env: env,
    //     clone_database: `${env}-CloneTimestreamDB`,
    //     clone_buses: `${env}-Clone-Buses`,
    //     clone_ders: `${env}-Clone-Ders`,
    //     clone_ext_grid: `${env}-Clone-ext-grid`,
    //     clone_lines: `${env}-Clone-Lines`,
    //     clone_load: `${env}-Clone-Load`,
    //     clone_storage: `${env}-Clone-Storage`,
    //     clone_transformers: `${env}-Clone-Transformers`,
    //   }
    // });

    // this.real_time_power_flow.addToRolePolicy(new aws_iam.PolicyStatement({
    //   actions: ["timestream:*", "s3:*", "athena:*", "glue:*"],
    //   resources: ['*'],
    // }));


    // this.eventRule = new events.Rule(this, 'realtimePowerFlowTrigger', {
    //   schedule: events.Schedule.expression('cron(0,30 * * * ? *)'),
    // });

    // this.eventRule.addTarget(new aws_events_targets.LambdaFunction(this.real_time_power_flow))

    // this.power_flow_historical = new aws_lambda.DockerImageFunction(this, `${env}-power-flow-historical`, {
    //   functionName: `historical-power-flow-${env}`,
    //   code: aws_lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../../services/historicalPowerFlow'), {
    //   }),
    //   timeout: Duration.minutes(3),
    //   memorySize: 1024,
    //   environment: {
    //     env: env
    //   }
    // });

    // this.power_flow_historical.addToRolePolicy(new aws_iam.PolicyStatement({
    //   actions: ["timestream:*", "s3:*", "athena:*", "glue:*", "ses:*"],
    //   resources: ['*'],
    // }));

    // const logGroup = new aws_logs.LogGroup(this, "ApiGatewayAccessLogs");

    // this.api = new aws_apigateway.LambdaRestApi(this, `historical-power-flow-api-${env}`, {
    //   defaultCorsPreflightOptions:{
    //     allowOrigins: aws_apigateway.Cors.ALL_ORIGINS,
    //     // allowCredentials: true
    //   },
    //   restApiName: `historical-power-flow-api-${env}`,
    //   handler: this.power_flow_historical,
    //   proxy: false,
    //   cloudWatchRole: true,
    //   deployOptions:{
    //     stageName: env,
    //     tracingEnabled: true,
    //     dataTraceEnabled: true,
    //     accessLogDestination: new aws_apigateway.LogGroupLogDestination(logGroup),
    //   }
    // });


    // // const auth = new aws_apigateway.CognitoUserPoolsAuthorizer(this, `Authorizer-${env}`, {
    // //   cognitoUserPools: [props.userPool],
    // //   identitySource: 'method.request.header.Authorizer',

    // // });

    // this.lambda_auth = new aws_lambda.DockerImageFunction(this, `Lambda-Authorizer-${env}-Omega-Clone`, {
    //   functionName: `Lambda-Authorizer-${env}-Omega-Clone`,
    //   code: aws_lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../../services/auth'), {
    //   }),
    //   timeout: Duration.minutes(1),
    //   memorySize: 256,
    // });

    // const auth = new aws_apigateway.TokenAuthorizer(this, `Authorizer-${env}-Omega-Clone`,{
    //   handler: this.lambda_auth
    // });

    // this.api.root.addResource('dates').addMethod(
    //   'GET', new aws_apigateway.LambdaIntegration(this.power_flow_historical), {
    //     authorizer: auth
    //   });


  }

}
