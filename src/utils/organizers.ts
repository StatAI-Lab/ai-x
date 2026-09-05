import { existsSync } from "node:fs";
import { join } from "node:path";
import { getCollection } from "astro:content";
import { withBase, type Lang } from "@/i18n/utils";
import { organizerAvatars } from "@/utils/images";

const publicDir = join(process.cwd(), "public");

function publicAssetExists(path: string) {
  return existsSync(join(publicDir, path.replace(/^\//, "")));
}

export async function getOrganizers(lang: Lang) {
  const organizers = await getCollection("organizers", ({ data }) => !data.draft);

  return organizers
    .sort((a, b) => a.data.order - b.data.order)
    .map(({ data }) => {
      const name = lang === "en" ? data.nameEn ?? data.name : data.name;
      const affiliation =
        lang === "en" ? data.affiliationEn ?? data.affiliation : data.affiliation;
      const avatar =
        data.avatar && publicAssetExists(data.avatar) ? withBase(data.avatar) : undefined;
      const optimizedAvatar = data.avatar ? organizerAvatars[data.avatar] : undefined;

      return {
        name,
        affiliation,
        homepage: data.homepage,
        avatar,
        optimizedAvatar,
      };
    });
}

export function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
