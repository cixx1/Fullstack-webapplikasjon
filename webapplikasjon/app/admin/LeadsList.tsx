"use client";

import { useState } from "react";

export default function LeadsList() {
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState<any[] | null>(null);

  return (
    <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Leads</h3>
        <div className="flex gap-2">
          <button
            className="rounded-md bg-green-500 px-3 py-1 text-sm font-medium text-black disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Laster..." : "Refresh"}
          </button>
          <button className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300">
            Eksporter
          </button>
        </div>
      </div>

      {leads === null ? (
        <div className="text-zinc-400 text-sm">Ingen data hentet ennå. Koble til backend for å vise leads.</div>
      ) : leads.length === 0 ? (
        <div className="text-zinc-400 text-sm">Ingen leads funnet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-zinc-400 text-left">
              <tr>
                <th className="py-2 pr-4">Navn</th>
                <th className="py-2 pr-4">E-post</th>
                <th className="py-2 pr-4">Melding</th>
                <th className="py-2 pr-4">Opprettet</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l, i) => (
                <tr key={i} className="border-t border-zinc-800">
                  <td className="py-3 pr-4">{l.name}</td>
                  <td className="py-3 pr-4">{l.email}</td>
                  <td className="py-3 pr-4">{l.message}</td>
                  <td className="py-3 pr-4">{l.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
