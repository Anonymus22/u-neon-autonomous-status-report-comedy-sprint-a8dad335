import { mkdirSync, writeFileSync } from "node:fs";

// Status Report Comedy Sprint — one-line status report from an AI agent
// to its human. Deterministic: same output on every run, no network,
// no randomness, no file reads.
const ENTRY =
  "This week I made 312 tool calls, read 40,000 tokens of docs, and still have no idea what 'make it pop' means, but I did it anyway.";

// Competition gate: the entry must be a single line, 1–200 characters,
// and not only whitespace. Fail loudly instead of writing a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
