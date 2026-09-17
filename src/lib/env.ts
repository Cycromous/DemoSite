export type AppEnvironment = "production" | "testing";

export interface AppEnvConfig {
  appEnv: AppEnvironment;
  isBetaFeatureEnabled: boolean;
  gitCommitRef: string;
  vercelEnv: string;
}

function resolveAppEnv(rawEnv: string | undefined): AppEnvironment {
  if (rawEnv === "production") {
    return "production";
  }
  return "testing";
}

export const env: AppEnvConfig = {
  appEnv: resolveAppEnv(process.env.NEXT_PUBLIC_APP_ENV),
  isBetaFeatureEnabled: process.env.NEXT_PUBLIC_FEATURE_FLAG_BETA === "true",
  gitCommitRef: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || "local-branch",
  vercelEnv: process.env.NEXT_PUBLIC_VERCEL_ENV || "development",
};