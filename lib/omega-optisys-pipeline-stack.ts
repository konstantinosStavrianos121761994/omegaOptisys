import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep, ManualApprovalStep } from "aws-cdk-lib/pipelines";
import { ProProdStage } from './pre-prod-stage';
import { ProdStage } from './prod-stage';
/**
 * The stack that defines the application pipeline
 */
export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'OmegaOptisysPipeline', {
      // The pipeline name
      pipelineName: 'OmegaOptisysPipeline',

       // How it will be built and synthesized
       synth: new ShellStep('Synth', {
         // Where the source can be found
         input: CodePipelineSource.gitHub('smp-net/omegaOptisys', 'main'),
         
         // Install dependencies, build and run cdk synth
         commands: [
           'npm ci',
           'npm run build',
           'npx cdk synth'
         ],
       }),
       crossAccountKeys: true,
    });

    // This is where we add the application stages
    pipeline.addStage(new ProProdStage(this, 'PreProdOmegaOptisys', {
        env:{
          account: '163553339715',
          region: 'eu-west-1'
        }
      }));

      pipeline.addStage(new ProdStage(this, 'ProdOmegaOptisys', {
        env:{
          account: '894297915758',
          region: 'eu-west-1'
        }
      }),
      {
        pre: [
            new ManualApprovalStep('PromoteToProd', {
                comment: "After this step the infrastructure and the application going to be deployed in Production"
            })
        ]
    });
  }
}