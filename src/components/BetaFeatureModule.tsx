"use client";

import { useState } from "react";
import { env } from "@/lib/env";

export default function BetaFeatureModule() {
  const isBeta = env.isBetaFeatureEnabled;
  const [simulatedLatency, setSimulatedLatency] = useState<number>(45);
  const [mockTraffic, setMockTraffic] = useState<boolean>(true);
  const [pingStatus, setPingStatus] = useState<string>("Ready");

  if (!isBeta) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 shadow-sm mb-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Experimental Features
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              No experimental features active in Production. Flag NEXT_PUBLIC_FEATURE_FLAG_BETA is disabled.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
            Feature Locked
          </span>
        </div>
      </div>
    );
  }

  const triggerPing = () => {
    setPingStatus("Pinging edge...");
    setTimeout(() => {
      setPingStatus(`Echo received: ${simulatedLatency}ms`);
    }, 400);
  };

  return (
    <div className="rounded-xl border border-amber-500/30 bg-slate-900/80 p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Beta Feature Showcase
            </h2>
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-950 text-amber-300 border border-amber-500/40">
              New in Testing
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            This module is conditionally rendered when NEXT_PUBLIC_FEATURE_FLAG_BETA is enabled.
          </p>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-slate-800 bg-slate-950/60 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold text-slate-300 block">
              Mock Edge Latency Simulator
            </span>
            <span className="text-xs text-slate-500 block">
              Adjust parameters to simulate staging preview behavior.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMockTraffic((prev) => !prev)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                mockTraffic
                  ? "bg-amber-600 hover:bg-amber-500 text-white"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-400"
              }`}
            >
              Traffic: {mockTraffic ? "ACTIVE" : "PAUSED"}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Simulated Latency</span>
            <span className="font-mono text-amber-300">{simulatedLatency} ms</span>
          </div>
          <input
            type="range"
            min="10"
            max="500"
            value={simulatedLatency}
            onChange={(e) => setSimulatedLatency(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        {/* New Feature: Network Ping Simulator */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Diagnostics: {pingStatus}
          </span>
          <button
            onClick={triggerPing}
            className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs rounded transition-colors cursor-pointer"
          >
            Run Ping Test
          </button>
        </div>
      </div>
    </div>
  );
}