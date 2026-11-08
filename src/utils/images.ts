import bilibiliQr from "@/assets/qr/bilibili.png";
import xiaohongshuQr from "@/assets/qr/xiaohongshu.png";
import bangLiuAvatar from "@/assets/organizers/bang-liu.jpg";
import chengchunShiAvatar from "@/assets/organizers/chengchun-shi.jpg";
import fanZhouAvatar from "@/assets/organizers/fan-zhou.jpg";
import hongtuZhuAvatar from "@/assets/organizers/hongtu-zhu.jpg";
import xiaowuDaiAvatar from "@/assets/organizers/xiaowu-dai.jpg";
import type { ImageMetadata } from "astro";

export const siteImages = {
  qr: {
    bilibili: bilibiliQr,
    xiaohongshu: xiaohongshuQr,
  },
} as const;

export const organizerAvatars: Record<string, ImageMetadata> = {
  "/organizers/bang-liu.jpg": bangLiuAvatar,
  "/organizers/chengchun-shi.jpg": chengchunShiAvatar,
  "/organizers/fan-zhou.jpg": fanZhouAvatar,
  "/organizers/hongtu-zhu.jpg": hongtuZhuAvatar,
  "/organizers/xiaowu-dai.jpg": xiaowuDaiAvatar,
};
