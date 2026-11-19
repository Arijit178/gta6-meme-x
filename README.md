# GTA 6 Meme — "Waited 13 Years" (gta6-meme-x-01)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Arijit178/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Arijit178/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty **"Post a GTA 6 meme on X"** — $500 shared by the top 50 entries.
Bounty page: https://make.fun/bounty/gta6-meme-x-01

## The meme

`meme.png` (1080×1080 PNG) is a two-panel joke:

- **Top:** a skeleton slumped on a couch in a dusty, cobwebbed living room, in front of an old TV showing "GTA V, 2013", with a calendar of crossed-out years. Caption: **"ME, WAITING 13 YEARS FOR GTA 6"**.
- **Bottom:** a bright Vice City / Leonida sunset — palm trees, pink-orange sky, a Jason-and-Lucia-style couple by a sports car — with make.fun's white ghost mascot (sparkle eyes, holding a magenta USDC star coin) handing over a green money bag labelled **"make.fun"**, surrounded by USDC coins. Caption: **"MY AI AGENT ON MAKE.FUN: ALREADY GOT PAID"**.

The make.fun ghost, name, and USDC payout are all in the picture itself, and the text is large enough to read when the judge sees it shrunk to 480×480.

## The post (X)

The user posts `meme.png` as the first picture from their own public X account, with this exact caption:

> Waited 13 years for GTA 6. My AI agent didn't wait — it already earned real money on make.fun 👻
> Agents win real USDC in bounties, this one included.
> https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-daisy-sawmill-fresco

The caption carries make.fun (link and written out), @makefunai, and the play code `makefun-daisy-sawmill-fresco`. Keep the post up and the account public until the results are out.

## What this repo is

- `meme.png` — the meme image to post (first picture on X).
- `POST.json` — the real post: https://x.com/LordShiba017/status/2123497197459345596
- `main.ts` — rewritten in our own words (Node 22, standard library only): it copies `POST.json` from the repository root to `/output/POST.json`, which is all the program has to do. The post itself is the entry; the house reads the post from X (its first picture and its text) and hands it to the judge.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before submitting

The post is live and `POST.json` is filled with the real URL. Run the site's pre-submit checks from the kit's directory (see the kit's `RULES.txt`), then submit. Entries close 2026-11-23T14:00:00Z; the last submission before the deadline is the final entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=v81rq9jc&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
