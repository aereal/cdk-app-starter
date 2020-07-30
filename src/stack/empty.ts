import { StackProps, Stack, Construct } from "@aws-cdk/core";

export class EmptyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }
}
