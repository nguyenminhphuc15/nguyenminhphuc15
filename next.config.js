const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "media.dev.to",
      "avatars.githubusercontent.com",
      "github-readme-stats.vercel.app",
      "github-readme-streak-stats.herokuapp.com",
      "stardev.io",
      "github-profile-summary-cards.vercel.app",
      "github-profile-trophy.vercel.app",
    ],
    dangerouslyAllowSVG: true,
  },
  output: "export", // Thêm dòng này để xuất trang tĩnh
  trailingSlash: true, // Tùy chọn: Thêm dấu gạch chéo vào cuối tất cả các đường dẫn, ví dụ: `/about` -> `/about/`
};

module.exports = nextConfig;
