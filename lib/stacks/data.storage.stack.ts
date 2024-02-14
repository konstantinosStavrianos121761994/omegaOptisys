/* eslint-disable camelcase */
import { Stack, StackProps, aws_glue, aws_iam, aws_timestream  } from 'aws-cdk-lib';
import { S3Bucket } from '../constructs/aws-s3-bucket';
import { Construct } from 'constructs';




/**
 * @summary The properties for the APIProps class.
 */
export interface DataStorageProps extends StackProps {
  readonly environment: string;
  readonly account: string;
}

export class DataStorageStack extends Stack {
  // public readonly networkTopologyBucket: S3Bucket;
  // public readonly profileBucket: S3Bucket;
  // public readonly glueDatabase: aws_glue.CfnDatabase;
  // public readonly profileDatabase: aws_glue.CfnDatabase;
  // public readonly csvClassifier: aws_glue.CfnClassifier;
  // public readonly clone_database: aws_timestream.CfnDatabase;
  // public readonly clone_bus: aws_timestream.CfnTable;
  // public readonly clone_lines: aws_timestream.CfnTable;
  // public readonly clone_transformers: aws_timestream.CfnTable;
  // public readonly clone_ext_grid: aws_timestream.CfnTable;
  // public readonly clone_load: aws_timestream.CfnTable;
  // public readonly clone_ders: aws_timestream.CfnTable;
  // public readonly clone_storage: aws_timestream.CfnTable;
  constructor(scope: Construct, id: string, props: DataStorageProps) {
    super(scope, id, props);

    const {
      environment: env
    } = props;

    // this.networkTopologyBucket = new S3Bucket(this, `${env}-network-topology-bucket`, {
    //     bucketName: `${env}-network-topology-bucket`,
    //     environment: env,
    //     isProd: env === 'prod',
    //   });

    //   this.profileBucket = new S3Bucket(this, `${env}-profile-bucket`, {
    //     bucketName: `${env}-profile-bucket`,
    //     environment: env,
    //     isProd: env === 'prod',
    //   });


    //   const database_name = (env === 'pre-prod') ? 'pre_prod' : 'prod';
    
    //   this.glueDatabase = new aws_glue.CfnDatabase(this, 'glueDatabaseNetworkTopology', {
    //   catalogId: props.account,
    //   databaseInput: {
    //       name: `${database_name}_network_topology_database`
    //   }
    //   })

    //   this.profileDatabase = new aws_glue.CfnDatabase(this, 'glueDatabaseProfile', {
    //     catalogId: props.account,
    //     databaseInput: {
    //         name: `${database_name}_typical_profiles_database`
    //     }
    //     })
    
    // this.csvClassifier = new aws_glue.CfnClassifier(this, 'CSVClassifier', {
    //     csvClassifier: {
    //     containsHeader: 'UNKNOWN',
    //     delimiter: ',',
    //     name: "comma-delimited-text",
    //     allowSingleColumn: true
    //     }
    // });

    // const crawlerRoleNetworkTopology = new aws_iam.Role(this, `crawler-Role-Network-Topology-${env}`, {
    //     roleName: `glue-crawler-Network-Topology-${env}`,
    //     assumedBy: new aws_iam.ServicePrincipal("glue.amazonaws.com"),
    //     managedPolicies: [
    //       aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
    //         "service-role/AWSGlueServiceRole"
    //       )
    //     ]
    //   });

    //   const crawlerRoleProfileTopology = new aws_iam.Role(this, `crawler-Role-Profile-${env}`, {
    //     roleName: `glue-crawler-Profile-${env}`,
    //     assumedBy: new aws_iam.ServicePrincipal("glue.amazonaws.com"),
    //     managedPolicies: [
    //       aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
    //         "service-role/AWSGlueServiceRole"
    //       )
    //     ]
    //   });
    
    //   crawlerRoleNetworkTopology.addToPolicy(new aws_iam.PolicyStatement({
    //     effect: aws_iam.Effect.ALLOW,
    //     actions: ["s3:GetObject",
    //       "s3:PutObject"],
    //     resources: [`${this.networkTopologyBucket.bucket.bucketArn}`, `${this.networkTopologyBucket.bucket.bucketArn}/*` ]
    //   }));

    //   crawlerRoleProfileTopology.addToPolicy(new aws_iam.PolicyStatement({
    //     effect: aws_iam.Effect.ALLOW,
    //     actions: ["s3:GetObject",
    //       "s3:PutObject"],
    //     resources: [`${this.profileBucket.bucket.bucketArn}`, `${this.profileBucket.bucket.bucketArn}/*` ]
    //   }));

    //   new aws_glue.CfnCrawler(this, `glue-crawler-profile-${props.environment}`, {
    //     name: `glue-crawler-profile-${env}`,
    //     databaseName: `${database_name}_typical_profiles_database`,
    //     role: crawlerRoleProfileTopology.roleArn,
    //     targets: {
    //       s3Targets: [
    //         {
    //           // eventQueueArn: this.queue.queueArn,
    //           path: `s3://${this.profileBucket.bucket.bucketName}/`
    //         }
    //       ]
    //     },
    //     configuration: JSON.stringify({
    //       Version: 1.0,
    //       CrawlerOutput: {
    //         Partitions: { AddOrUpdateBehavior: "InheritFromTable" },
    //         Tables: { AddOrUpdateBehavior: "MergeNewColumns" },

    //       },
    //       Grouping: {
    //         TableLevelConfiguration: 2
    //       }
    //     }),
    //     recrawlPolicy: {
    //       recrawlBehavior: "CRAWL_EVERYTHING"
    //     },
    //     schemaChangePolicy: {
    //       updateBehavior: "UPDATE_IN_DATABASE",
    //       deleteBehavior: "DEPRECATE_IN_DATABASE"
    //     }
    //   });

    //   new aws_glue.CfnCrawler(this, `glue-crawler-network-topology-${props.environment}`, {
    //     name: `glue-crawler-network-topology-${env}`,
    //     databaseName: `${database_name}_network_topology_database`,
    //     role: crawlerRoleNetworkTopology.roleArn,
    //     targets: {
    //       s3Targets: [
    //         {
    //           // eventQueueArn: this.queue.queueArn,
    //           path: `s3://${this.networkTopologyBucket.bucket.bucketName}/`
    //         }
    //       ]
    //     },
    //     configuration: JSON.stringify({
    //       Version: 1.0,
    //       CrawlerOutput: {
    //         Partitions: { AddOrUpdateBehavior: "InheritFromTable" },
    //         Tables: { AddOrUpdateBehavior: "MergeNewColumns" },
    //       },
    //       // Grouping: {
    //       //   TableGroupingPolicy: "CombineCompatibleSchemas"
    //       // }
    //     }),
    //     recrawlPolicy: {
    //       recrawlBehavior: "CRAWL_EVERYTHING"
    //     },
    //     schemaChangePolicy: {
    //       updateBehavior: "UPDATE_IN_DATABASE",
    //       deleteBehavior: "DEPRECATE_IN_DATABASE"
    //     }
    //   });

    //   this.clone_database = new aws_timestream.CfnDatabase(this, 'CloneTimestreamDB', {
    //     databaseName: `${env}-CloneTimestreamDB`
    // });

    // if (typeof this.clone_database.databaseName === "string") {
    //   this.clone_bus = new aws_timestream.CfnTable(this, 'CloneBus', {
    //       tableName: `${env}-Clone-Buses`,
    //       databaseName: this.clone_database.databaseName,
    //       retentionProperties:{
    //         MemoryStoreRetentionPeriodInHours: "6",
    //         MagneticStoreRetentionPeriodInDays: "7"
    //       }
    //   });
    //   this.clone_lines = new aws_timestream.CfnTable(this, 'CloneLines', {
    //       tableName: `${env}-Clone-Lines`,
    //       databaseName: this.clone_database.databaseName,
    //       retentionProperties:{
    //         MemoryStoreRetentionPeriodInHours: "6",
    //         MagneticStoreRetentionPeriodInDays: "7"
    //       }
    //   });
    //   this.clone_transformers = new aws_timestream.CfnTable(this, 'CloneTransformers', {
    //       tableName: `${env}-Clone-Transformers`,
    //       databaseName: this.clone_database.databaseName,
    //       retentionProperties:{
    //         MemoryStoreRetentionPeriodInHours: "6",
    //         MagneticStoreRetentionPeriodInDays: "7"
    //       }
    //   });
    //   this.clone_storage = new aws_timestream.CfnTable(this, 'CloneStorage', {
    //       tableName: `${env}-Clone-Storage`,
    //       databaseName: this.clone_database.databaseName,
    //       retentionProperties:{
    //         MemoryStoreRetentionPeriodInHours: "6",
    //         MagneticStoreRetentionPeriodInDays: "7"
    //       }
    //   });
    //   this.clone_ders = new aws_timestream.CfnTable(this, 'CloneDers', {
    //       tableName: `${env}-Clone-Ders`,
    //       databaseName: this.clone_database.databaseName,
    //       retentionProperties:{
    //         MemoryStoreRetentionPeriodInHours: "6",
    //         MagneticStoreRetentionPeriodInDays: "7"
    //       }
    //   });
    //   this.clone_ext_grid = new aws_timestream.CfnTable(this, 'CloneExtGrid', {
    //       tableName: `${env}-Clone-ext-grid`,
    //       databaseName: this.clone_database.databaseName,
    //       retentionProperties:{
    //         MemoryStoreRetentionPeriodInHours: "6",
    //         MagneticStoreRetentionPeriodInDays: "7"
    //       }
    //   });

    //   this.clone_load = new aws_timestream.CfnTable(this, 'CloneLoad', {
    //       tableName: `${env}-Clone-Load`,
    //       databaseName: this.clone_database.databaseName,
    //       retentionProperties:{
    //         MemoryStoreRetentionPeriodInHours: "6",
    //         MagneticStoreRetentionPeriodInDays: "7"
    //       }
    //   });
    //   }

    
  
  }

}
