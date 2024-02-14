import { Fn, Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { OmegaOptisysStack } from './omega_optisys-stack';

/**
 * Deployable unit of web service app
 */
export class ProProdStage extends Stage {
  public readonly infrastructureStack: OmegaOptisysStack;
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    this.infrastructureStack = new OmegaOptisysStack(this, 'PreProdStage',{
      stackName: 'OmegaOptisysPreProdStage',
      environment: 'pre-prod',
      account: '163553339715' 
    });
    
  }
}