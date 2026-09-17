"use client";

import { useEffect, useState } from "react";
import { env } from "@/lib/env";
import BetaFeatureModule from "@/components/BetaFeatureModule";

export default function HomePage() {
  const [mountedAt, setMountedAt] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string>("None");

  useEffect(() => {
    setMountedAt(new Date().toLocaleString());
  }, []);

  const isProduction = env.appEnv === "production";

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    setLastAction(`Incremented at ${new Date().toLocaleTimeString()}`);
  };

  const handleReset = () => {
    setCounter(0);
    setLastAction(`Reset at ${new Date().toLocaleTimeString()}`);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Top Environment Banner */}
      <div
        className={`w-full rounded-lg border p-4 mb-8 text-center transition-colors ${
          isProduction
            ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-200"
            : "border-amber-500/40 bg-amber-950/40 text-amber-200"
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <span
            className={`inline-block w-2.5 h-2.5 rounded-full ${
              isProduction ? "bg-emerald-400" : "bg-amber-400"
            }`}
          />
          <h1 className="text-lg font-bold tracking-wider uppercase">
            {isProduction ? "Production Environment" : "Testing Environment"}
          </h1>
        </div>
        <p className="text-xs opacity-80 mt-1">
          {isProduction
            ? "Live deployment serving end users."
            : "Staging deployment for verification and review."}
        </p>
      </div>

      {/* Metadata Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
          Deployment Metadata
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <span className="text-xs text-slate-500 block">Active Mode</span>
            <span
              className={`inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded ${
                isProduction
                  ? "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50"
                  : "bg-amber-900/50 text-amber-300 border border-amber-700/50"
              }`}
            >
              {env.appEnv.toUpperCase()}
            </span>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <span className="text-xs text-slate-500 block">Git Branch</span>
            <span className="font-mono text-sm text-slate-200 mt-1 block truncate">
              {env.gitCommitRef}
            </span>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <span className="text-xs text-slate-500 block">Vercel Target</span>
            <span className="font-mono text-sm text-slate-200 mt-1 block">
              {env.vercelEnv}
            </span>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <span className="text-xs text-slate-500 block">Client Loaded At</span>
            <span className="font-mono text-sm text-slate-200 mt-1 block">
              {mountedAt || "Loading client..."}
            </span>
          </div>
        </div>
      </div>

      {/* Beta Feature Showcase */}
      <BetaFeatureModule />

      {/* Interactive Action Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Runtime Verification
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Test client-side hydration and state handling in the current environment.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg border border-slate-800 bg-slate-950/60">
          <div>
            <span className="text-xs text-slate-500 block">Execution Counter</span>
            <span className="text-3xl font-bold font-mono text-white">
              {counter}
            </span>
            <span className="text-xs text-slate-500 block mt-1">
              Status: {lastAction}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleIncrement}
              className="px-4 py-2 rounded-md text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors cursor-pointer"
            >
              Increment
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-md text-xs font-semibold bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}