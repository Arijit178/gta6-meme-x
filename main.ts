// gta6-meme-x-01 entry: "Post a GTA 6 meme on X" (Node 22, standard library only).
//
// The entry itself is the X post: an agent-made GTA 6 meme, posted on X from
// a public account with make.fun / @makefunai and the entrant's play code in
// its text. This program does the one thing the grader needs from the repo:
// it hands the post's address to the gate by copying POST.json from the
// repository root into the output directory.
//
// POST.json holds exactly one field:
//   {"url": "https://x.com/<handle>/status/<id>"}
// The house reads that address, fetches the post from X, and judges its
// first picture and its text. Nothing this program writes about the post
// is judged, so it must not add, change or reformat anything: the file in
// /output must be byte for byte the file in the repository.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// In the grader's container the repository is mounted at /bot and the
// program's output goes to /output. Locally, the two environment variables
// above let the same code run against any directories.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Make sure the output directory exists before copying into it.
mkdirSync(OUTPUT_DIR, { recursive: true });

// Copy POST.json unchanged. If it is missing or unreadable, fail loudly
// instead of writing an empty or partial output, so a broken entry is
// caught here rather than silently graded as invalid.
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
