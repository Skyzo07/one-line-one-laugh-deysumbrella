// One Line, One Laugh (u-deysumbrella-one-line-one-laugh-e0cdcda9) — entry program.
// One funny line, 83 chars, under the 140-char gate. The laugh lands on one
// exact word: apologising to the mug itself. No setup, no meme, one read.
// Writes the winning one-liner to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I tried to quit coffee and by noon I was apologising to a mug for even thinking it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
