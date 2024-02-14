import { Fn, Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { OmegaOptisysStack } from './omega_optisys-stack';

/**
 * Deployable unit of web service app
 */
export class ProdStage extends Stage {
  public readonly infrastructureStack: OmegaOptisysStack;
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    this.infrastructureStack = new OmegaOptisysStack(this, 'OmegaOptisysProdStage',{
      stackName: 'OmegaOptisysProdStage',
      environment: 'prod',
      account: '894297915758'
    });
    
  }
}