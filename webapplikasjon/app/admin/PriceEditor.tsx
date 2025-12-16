"use client";

import { useEffect, useState } from "react";

interface Package {
  id: number;
  name: string;
  price: number;
  features: string;
}

export default function PriceEditor() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editPrice, setEditPrice] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const fetchPackages = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/api/packages`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setPackages(data);
    } catch (err: any) {
      console.error("Hent packages feilet:", err);
      setError("Kunne ikke hente pakker");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSavePrice = async (id: number) => {
    setError(null);
    setSuccess(null);
    const price = parseInt(editPrice);
    if (isNaN(price) || price < 0) {
      setError("Ugyldig pris");
      return;
    }
    try {
      const res = await fetch(`${apiUrl}/api/packages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSuccess("Pris oppdatert!");
      setEditingId(null);
      setEditPrice("");
      fetchPackages();
    } catch (err: any) {
      console.error("Oppdater pris feilet:", err);
      setError("Kunne ikke oppdatere pris");
    }
  };

  return (
    <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Pakkepriser</h3>
        <button
          onClick={fetchPackages}
          className="rounded-md bg-green-500 px-3 py-1 text-sm font-medium text-black disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Laster..." : "Refresh"}
        </button>
      </div>

      {error && <div className="text-red-400 text-sm mb-2">{error}</div>}
      {success && <div className="text-green-400 text-sm mb-2">{success}</div>}

      {packages.length === 0 ? (
        <div className="text-zinc-400 text-sm">Ingen pakker funnet.</div>
      ) : (
        <div className="space-y-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex items-center justify-between border-b border-zinc-700 pb-3"
            >
              <div className="flex-1">
                <h4 className="font-semibold">{pkg.name}</h4>
                <p className="text-xs text-zinc-400">{pkg.features}</p>
              </div>
              <div className="flex items-center gap-2">
                {editingId === pkg.id ? (
                  <>
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      className="rounded px-2 py-1 bg-zinc-800 text-white w-24"
                      placeholder="Pris"
                    />
                    <button
                      onClick={() => handleSavePrice(pkg.id)}
                      className="rounded bg-green-500 px-2 py-1 text-xs font-medium text-black"
                    >
                      Lagre
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="rounded bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-100"
                    >
                      Avbryt
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-lg font-bold text-green-400">
                      {pkg.price === 0 ? "Pris etter avtale" : `${pkg.price} kr`}
                    </span>
                    <button
                      onClick={() => {
                        setEditingId(pkg.id);
                        setEditPrice(pkg.price.toString());
                      }}
                      className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-300 hover:border-zinc-500"
                    >
                      Rediger
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
