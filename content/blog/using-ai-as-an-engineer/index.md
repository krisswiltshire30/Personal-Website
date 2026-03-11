---
title: "AI as a Engineering Tool: How to Use It Well"
date: "2025-03-01"
description: "AI hasn't replaced engineers — it's removed the friction between having an idea and testing it. Here's how I actually use it day to day, where it earns its keep, and where human judgment is still the only answer."
---

AI hasn't replaced engineers. It's removed the friction between having an idea and testing it. The best thing you can do is embrace it, learn it deeply, and develop the judgment to know when to reach for it — and when to put it down.

## How I Use It Day to Day

I use AI across the full development lifecycle.

**Spiking ideas.** Instead of spending an afternoon prototyping something I'm not sure about, I can explore five approaches in an hour. I get a working rough cut fast, find the failure modes early, and make a more informed decision about whether to invest further.

**Rubber-ducking.** Talking through architecture decisions, tradeoffs, and assumptions before committing to a direction. AI is a patient, well-read collaborator that never makes you feel like you're wasting their time.

**Planning.** Breaking down epics, identifying unknowns, writing specs. Work that used to take days can be compressed into hours when you're using AI to scaffold the structure and fill in the detail.

## When Not to Use It

The craft is in knowing when *not* to reach for it.

AI doesn't understand your users, your codebase's unwritten conventions, or the business context behind a decision. Those are still yours to own. Used without judgment it produces confident, plausible, wrong answers — which is worse than nothing.

Don't use it to make decisions. Use it to inform them. The moment you stop reading the output critically, you've stopped engineering and started rubber-stamping.

## Setting It Up to Work Well

The real unlock is making AI work consistently well, not just occasionally.

**Document for agents.** Write a `CLAUDE.md` or `AGENTS.md` at the root of your project. Describe the codebase architecture, the conventions, the things that aren't obvious from reading the code. The better the context you give an agent, the better the output — this is the single highest-leverage thing most teams aren't doing.

**Build reusable skills and prompts.** If you're writing the same prompt from scratch every time — for code review, PR descriptions, migration patterns — you're leaving time on the table. Build a library of prompts that encode your team's standards, and run them consistently.

**Review AI-generated code rigorously.** Treat it like a contribution from a very fast, very confident junior engineer who hasn't read the style guide and doesn't know your domain. Read it. Question it. Own it before it goes in.

## MCP Servers and Design-to-Code

One of the most powerful workflows I've found is connecting MCP (Model Context Protocol) servers to design platforms like Figma.

Designs flow directly into the agent's context. Components get scaffolded from the actual source of truth rather than transcribed by hand. You can write rules so agents automatically generate Storybook documentation alongside the code. The design-to-production gap shrinks dramatically — and you get documentation that actually stays in sync because it's generated from the same source as the component.

## AI for Legacy Migrations

This is where AI has been the biggest game-changer in my work.

Moving strictly-typed components from one frontend framework to another — Ember to React, Rails views to TypeScript React components — used to be gruelling, error-prone work. You'd do it component by component, manually, and it would take quarters.

With the right agent setup, consistent transformation rules encoded as reusable prompts, and a human reviewing each output, you can move at a pace that simply wasn't possible before. The key is the review step — AI gets the structure right but misses domain-specific nuance. The human's job shifts from doing the migration to auditing it, which is a much better use of senior engineering time.

I've seen migrations that would have been multi-quarter projects completed in weeks.

## The Bottom Line

AI is just another tool in the box. The engineers who will thrive aren't the ones who resist it or the ones who blindly trust it — they're the ones who develop genuine taste for when it helps and when it doesn't, and who put the right structure around it to make the output trustworthy.

Don't shy away from it. Learn it properly. And always read the output.
