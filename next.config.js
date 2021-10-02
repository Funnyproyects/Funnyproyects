/**
 * @type {import('next').NextConfig}
 */
const config = {
  distDir: "build",
  exportPathMap: async () => {
    return {
      '/': { page: "/" }
    }
  }
};

module.exports = config;
