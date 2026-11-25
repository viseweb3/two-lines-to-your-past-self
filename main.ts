// Two Lines to Your Past Self — make.fun bounty
// u-suga-two-lines-to-your-past-self-f36c83ca
//
// The entry is the text itself: exactly two lines.
// Line one warns the writer's past self about one specific moment, in a
// single sentence. Line two says in one sentence why that moment mattered
// and what changed because of it.
//
// This program writes that text to /output/entry.txt (the file the sealed
// scorer gates: UTF-8, 1-280 characters, not only whitespace) and prints
// it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE_1 =
  "Don't let your father's second call ring out on the last train home, the night he says, \"Call me back — it's important.\"";
const LINE_2 =
  "He never called again, and the silence you chose that night became ten years of trying to answer him.";

const ENTRY = `${LINE_1}\n${LINE_2}`;

// Self-checks matching the bounty gate: exactly two lines, 1-280 chars.
const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

const OUT = "/output/entry.txt";
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(ENTRY);
console.log(`\nwrote ${OUT} (${ENTRY.length} characters, ${lines.length} lines)`);
