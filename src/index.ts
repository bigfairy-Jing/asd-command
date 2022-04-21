#!/usr/bin/env node
import program from "commander";
import { version } from "../package.json";
import chalk from "chalk";
import { validNodeVersion } from "../lib/utils";

// 检测NODE版本是否合格
if (validNodeVersion()) {
  process.exit(1);
  console.log(6666);
}
