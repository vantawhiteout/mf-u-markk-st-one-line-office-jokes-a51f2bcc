// SPDX-License-Identifier: MIT
// One-Line Office Jokes: write the single entry line deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The conference room is booked as 'focus time' with twelve people on the invite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
