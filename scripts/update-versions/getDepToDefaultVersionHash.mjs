// @ts-check
import { basename } from "path";

import { getWorkspacePaths } from "./getWorkspacePaths.mjs";

export const getDepToDefaultVersionHash = () =>
  getWorkspacePaths().reduce(
    (acc, workspacePath) => ({
      ...acc,
      [`@aws-sdk/${basename(workspacePath)}`]: "*",
    }),
    {}
  );
