import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CognitoStack } from './stacks/cognito.stack';
import { DataStorageStack } from './stacks/data.storage.stack';
import { PowerFlowsStack } from './stacks/clone.services.stack';

export interface OmegaOptisysInfrastructureStackProps extends cdk.StackProps {
  readonly environment: string;
  readonly account: string;
}

export class OmegaOptisysStack extends cdk.Stack {
  // public readonly cognitoStack: CognitoStack;
  // public readonly dataStorageStack: DataStorageStack;
  // public readonly powerFlowStack: PowerFlowsStack;

  constructor(scope: Construct, id: string, props: OmegaOptisysInfrastructureStackProps) {
    super(scope, id, props);

    // this.cognitoStack = new CognitoStack(this, `cognito-omega-clone-${props.environment}`,{
    //   environment: props.environment,
    //  });

    //  this.dataStorageStack = new DataStorageStack(this, `data-storage-omega-clone-${props.environment}`,{
    //   environment: props.environment,
    //   account: props.account,
    //  });


    //  this.powerFlowStack = new PowerFlowsStack(this, `power-flow-omega-clone-${props.environment}`,{
    //   environment: props.environment,
    //   stackName: `power-flow-omega-clone-${props.environment}`
    //  });

    //  this.powerFlowStack.addDependency(this.cognitoStack)
    //  this.powerFlowStack.addDependency(this.dataStorageStack)
  }
}
