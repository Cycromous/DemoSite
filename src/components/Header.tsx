import { env } from "@/lib/env";

export default function Header() {
  const isProduction = env.appEnv === "production";

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-700 border border-slate-600" />
          <span className="text-sm font-semibold tracking-wide text-slate-200">
            Vercel Environment Demonstrator
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 hidden sm:inline-block">
            Active Environment:
          </span>
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
              isProduction
                ? "bg-emerald-950/70 border-emerald-500/50 text-emerald-300"
                : "bg-amber-950/70 border-amber-500/50 text-amber-300"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isProduction ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            {isProduction ? "Production" : "Testing"}
          </div>
        </div>
      </div>
    </header>
  );
}