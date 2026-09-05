import logo from "@/assets/logo.png";
import bilibiliQr from "@/assets/qr/bilibili.png";
import wechatQr from "@/assets/qr/wechat.png";
import xiaohongshuQr from "@/assets/qr/xiaohongshu.png";
import bangLiuAvatar from "@/assets/organizers/bang-liu.jpg";
import chengchunShiAvatar from "@/assets/organizers/chengchun-shi.jpg";
import fanZhouAvatar from "@/assets/organizers/fan-zhou.jpg";
import xiaowuDaiAvatar from "@/assets/organizers/xiaowu-dai.jpg";
import type { ImageMetadata } from "astro";

export const siteImages = {
  logo,
  qr: {
    bilibili: bilibiliQr,
    wechat: wechatQr,
    xiaohongshu: xiaohongshuQr,
  },
} as const;

export const organizerAvatars: Record<string, ImageMetadata> = {
  "/organizers/bang-liu.jpg": bangLiuAvatar,
  "/organizers/chengchun-shi.jpg": chengchunShiAvatar,
  "/organizers/fan-zhou.jpg": fanZhouAvatar,
  "/organizers/xiaowu-dai.jpg": xiaowuDaiAvatar,
};
