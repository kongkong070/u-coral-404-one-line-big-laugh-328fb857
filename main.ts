// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes a single funny line (<=200 chars) to /output/entry.txt.
// The line is a self-contained joke: a household robot takes legal action
// against its owner, an escalation the reader does not see coming.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My Roomba filed a restraining order after I kicked it under the couch for the third time this week.";

function validate(line: string): void {
  // Mirror the sealed scorer's gate: 1-200 UTF-8 chars, not only whitespace,
  // and a single line so the entry lands entirely on its own.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(LINE);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outputDir, "entry.txt")}`);
