import { expect as cdkExpect } from "@aws-cdk/assert";
import { App } from "@aws-cdk/core";
import { EmptyStack } from "../../src/stack/empty";

describe("EmptyStack", () => {
  test("resources", () => {
    const app = new App();
    const stack = new EmptyStack(app, "empty");
    cdkExpect(stack).toMatch({});
  });
});
