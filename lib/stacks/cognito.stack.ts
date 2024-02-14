/* eslint-disable camelcase */
import { Stack, StackProps, aws_ec2, aws_cognito, CfnOutput, aws_iam  } from 'aws-cdk-lib';
import { Construct } from 'constructs';




/**
 * @summary The properties for the APIProps class.
 */
export interface CognitoStackProps extends StackProps {
  readonly environment?: string;
  readonly vpc?: aws_ec2.Vpc;
}

export class CognitoStack extends Stack {
    public readonly pool: aws_cognito.UserPool;
    public readonly userPoolClient: aws_cognito.UserPoolClient;
    public readonly grouprole: aws_iam.Role;
  constructor(scope: Construct, id: string, props: CognitoStackProps) {
    super(scope, id, props);

    const {
      environment: env
    } = props;

  //   this.pool = new aws_cognito.UserPool(this, `Omega-Clone-Pool-${env}`,{
  //       userPoolName: `Omega-Clone-Pool-${env}`,
  //       signInAliases: {
  //           username: true,
  //           email: true
  //       }
  //   });

   

  //   this.userPoolClient = new aws_cognito.UserPoolClient(this, `Omega-Clone-Pool-Client-${env}`,{
  //       userPool: this.pool,
  //       userPoolClientName: `Omega-Clone-Pool-Client-${env}`,
  //       supportedIdentityProviders:[
  //           // aws_cognito.UserPoolClientIdentityProvider.AMAZON,
  //           aws_cognito.UserPoolClientIdentityProvider.custom(`SAML-AWS-Identity-${env}`)
  //       ],
  //       oAuth: {
  //           flows: {
  //               implicitCodeGrant: true
  //           }
  //       }
        
  //   });

  //   const domain = this.pool.addDomain('Domain',{
  //       cognitoDomain: {
  //           domainPrefix: 'omega-clone-smpnet'
  //       } 
  //   });


  //   const userPoolIdentityProviderSaml = new aws_cognito.UserPoolIdentityProviderSaml(this, `SAML-AWS-User-Pool-Identity-Provider-${env}`,
  //   {
  //       name: `SAML-AWS-Identity-${env}`,
  //       userPool: this.pool,
  //       metadata: {
  //           metadataContent: 'https://portal.sso.eu-west-1.amazonaws.com/saml/metadata/NDExODI2NTE1MDg1X2lucy03Y2NlM2M5OTU4YTZlMmM0',
  //           metadataType: aws_cognito.UserPoolIdentityProviderSamlMetadataType.URL
  //       },
  //       attributeMapping: {
  //           email: aws_cognito.ProviderAttribute.other('email')

  //   }});

  //   this.grouprole = new aws_iam.Role(this, `UserPoolRole${env}`, {
  //       assumedBy: new aws_iam.ServicePrincipal('cognito-idp.amazonaws.com'),
  //     });

  //   this.grouprole.addToPolicy(new aws_iam.PolicyStatement({
  //       effect: aws_iam.Effect.ALLOW,
  //       actions: ['*'],
  //       resources: ['*']
  //   }))

  //   const cfnUserPoolGroup = new aws_cognito.CfnUserPoolGroup(this, `MyCfnUserPoolGroup`, {
  //       userPoolId: this.pool.userPoolId,
  //       groupName: `Omega-Clone-User-Group-${env}`,
  //       roleArn: this.grouprole.roleArn,
  //     });

  //     if (typeof cfnUserPoolGroup.groupName === 'string'){
  //       new aws_cognito.CfnUserPoolUserToGroupAttachment(this, `UserPoolUserToGroupAttachment${env}`, {
  //           groupName: cfnUserPoolGroup.groupName,
  //           username: 'SAML-AWS-Identity-pre-prod_konstantinos.stavrianos@smpnetworks.com',
  //           userPoolId: this.pool.userPoolId,
  //         });
  //     }
      
  //     const cognitoIdentityProviderProperty: aws_cognito.CfnIdentityPool.CognitoIdentityProviderProperty = {
  //       clientId: this.userPoolClient.userPoolClientId,
  //       providerName: this.pool.userPoolProviderName,
  //       serverSideTokenCheck: false,
  //     };

  //     const indentity_pool = new aws_cognito.CfnIdentityPool(this, 'IdentityPool',{
  //       allowUnauthenticatedIdentities: false,
  //       identityPoolName: `${env}`,
  //       developerProviderName: domain.domainName,
  //       // cognitoIdentityProviders: [cognitoIdentityProviderProperty]
  //     });

  //     const authenticatedRole = new aws_iam.Role(this, 'CognitoDefaultAuthenticatedRole', {
  //       assumedBy: new aws_iam.FederatedPrincipal('cognito-identity.amazonaws.com', {
  //           "StringEquals": { "cognito-identity.amazonaws.com:aud": indentity_pool.ref },
  //           "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "authenticated" },
  //       }, "sts:AssumeRoleWithWebIdentity"),
  //       // Add policies or permissions to this role...
  //   });

  //   const unauthenticatedRole = new aws_iam.Role(this, 'CognitoDefaultUnauthenticatedRole', {
  //     assumedBy: new aws_iam.FederatedPrincipal('cognito-identity.amazonaws.com', {
  //         "StringEquals": { "cognito-identity.amazonaws.com:aud": indentity_pool.ref },
  //         "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "unauthenticated" },
  //     }, "sts:AssumeRoleWithWebIdentity"),
  //     // Add policies or permissions to this role...
  // });
    

  //     new aws_cognito.CfnIdentityPoolRoleAttachment(this, `${env}-identity-role`,{
  //       identityPoolId: indentity_pool.ref,
  //       roles: {
  //         'authenticated': authenticatedRole.roleArn,
  //         'unauthenticated': unauthenticatedRole.roleArn,
  //     },
  //     })
      


  //   this.userPoolClient.node.addDependency(userPoolIdentityProviderSaml)

  //   // Output the user pool ID and client ID
  //   new CfnOutput(this, 'UserPoolId', {
  //       value: this.pool.userPoolId,
  //       description: 'User Pool Id'
  //     });
  //   new CfnOutput(this, 'UserPoolClientId', {
  //       value: this.userPoolClient.userPoolClientId,
  //       description: 'User pool Client ID'
  //   });

  }

}
