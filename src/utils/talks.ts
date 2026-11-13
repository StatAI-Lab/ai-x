import { getCollection } from "astro:content";

const talkFiles = import.meta.glob("../content/talks/**/*.{md,mdx}");

export type TalkEntry = Awaited<ReturnType<typeof getTalks>>[number];

export async function getTalks() {
  if (Object.keys(talkFiles).length === 0) return [];
  return getCollection("talks", ({ data }) => !data.draft);
}

/** Select translated talk content while preserving shared dates, links, and assets. */
export function localizeTalk(talk: TalkEntry, lang: "zh" | "en") {
  const data = talk.data;
  const en = lang === "en";
  return {
    ...data,
    title: en ? data.titleEn ?? data.title : data.title,
    speaker: en ? data.speakerEn ?? data.speaker : data.speaker,
    affiliation: en ? data.affiliationEn ?? data.affiliation : data.affiliation,
    summary: en ? data.summaryEn ?? data.summary : data.summary,
    abstract: en ? data.abstractEn ?? data.abstract : data.abstract,
    bio: en ? data.bioEn ?? data.bio : data.bio,
  };
}

/** Named replay links, with support for older talks using videoUrl. */
export function getTalkRecordings(data: TalkEntry["data"]) {
  const recordings = data.recordings.map(({ platform, url }) => ({
    label: platform === "bilibili" ? "Bilibili" : "YouTube",
    url,
  }));
  if (data.videoUrl && !recordings.some(({ url }) => url === data.videoUrl)) {
    recordings.push({ label: "Video", url: data.videoUrl });
  }
  return recordings;
}
