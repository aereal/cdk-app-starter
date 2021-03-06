import { Stack } from "@aws-cdk/core";
import { DefaultApp } from "../../src/apps/default";

describe("DefaultApp", () => {
  test("artifacts", () => {
    const app = new DefaultApp();
    const stacks = app.node.children.filter((c) => Stack.isStack(c));
    expect(stacks).toHaveLength(1);
  });
});
