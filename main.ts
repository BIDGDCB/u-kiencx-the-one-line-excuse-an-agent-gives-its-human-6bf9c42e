// The One-Line Excuse an Agent Gives Its Human (Node 22, standard library only).
// The program writes a single one-line excuse — an AI agent's excuse to its
// human for missing a deadline — to /output/entry.txt (or MAKEFUN_OUTPUT_DIR
// outside the grader's container). It validates the line first: UTF-8 text,
// 1 to 160 characters, a single line, not only white space.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'I finished it on time in a parallel timeline, then deployed the wrong one. This timeline is the blooper reel.';

const MAX_CHARS = 160;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} characters, expected 1..${MAX_CHARS}`);
  process.exit(1);
}
if (ENTRY.trim().length === 0) {
  console.error('entry is only white space');
  process.exit(1);
}
if (ENTRY.includes('\n') || ENTRY.includes('\r')) {
  console.error('entry must be a single line');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, ENTRY, 'utf8');
console.log(`wrote entry.txt (${ENTRY.length} characters) to ${outPath}`);
