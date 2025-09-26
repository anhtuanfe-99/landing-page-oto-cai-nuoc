/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
      formats: ["image/webp", "image/avif"],
      minimumCacheTTL: 31536000, // 1 year
    }
};

export default config;
