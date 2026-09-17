import { env } from "@/lib/env";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-500 text-xs py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>Next.js Vercel Multi-Environment Demonstrator</span>
        <span className="font-mono">
          Branch: {env.gitCommitRef} | Target: {env.vercelEnv}
        </span>
      </div>
    </footer>
  );
}