import { App, AppProps } from "@aws-cdk/core";
import { EmptyStack } from "../stack/empty";

export class DefaultApp extends App {
  constructor(props?: AppProps) {
    super(props);

    new EmptyStack(this, "empty-stack");
  }
}

if ("CDK_CLI_VERSION" in process.env) {
  const app = new DefaultApp();
  app.synth();
}
