import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = "/reshma.baskaran";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubActions ? repositoryBasePath : "",
  assetPrefix: isGitHubActions ? repositoryBasePath : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
