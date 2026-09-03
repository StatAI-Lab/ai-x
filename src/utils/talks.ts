import { getCollection } from "astro:content";

const talkFiles = import.meta.glob("../content/talks/**/*.{md,mdx}");

export type TalkEntry = Awaited<ReturnType<typeof getTalks>>[number];

export async function getTalks() {
  if (Object.keys(talkFiles).length === 0) return [];
  return getCollection("talks", ({ data }) => !data.draft);
}
