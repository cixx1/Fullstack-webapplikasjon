"use client";

import { useEffect, useState } from "react";

interface Package {
  id: number;
  name: string;
  price: number;
  features: string;
}

export default function PricingSection() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/packages`);
        if (!res.ok) throw new Error("Failed to fetch packages");
        const data = await res.json();
        setPackages(data);
      } catch (err) {
        console.error("Hent packages feilet:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, [apiUrl]);

  if (loading) {
    return <div className="text-zinc-400">Laster priser...</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {packages.map((pkg) => {
        let highlight = false;
        let cta = "Bestill";
        if (pkg.id === 2) {
          highlight = true;
          cta = "Legg til service";
        } else if (pkg.id === 3) {
          cta = "Snakk med oss";
        }

        const priceDisplay = pkg.price === 0 ? "Kontakt oss" : `${pkg.price.toLocaleString('no-NO')},- ${pkg.id === 2 ? '/mnd' : 'engang'}`;
        const setup = pkg.id === 2 ? "Ingen binding" : pkg.id === 3 ? "Tilpasset" : "Ingen månedlig kost";

        const features = pkg.features.split(";").map((f) => f.trim());

        return (
          <div
            key={pkg.id}
            className={`flex flex-col rounded-2xl border p-6 ${
              highlight
                ? "border-green-500/50 bg-green-500/10 shadow-xl shadow-green-500/20"
                : "border-zinc-900 bg-zinc-950/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              {highlight && (
                <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
                  Mest valgt
                </span>
              )}
            </div>
            <p className="mt-4 text-3xl font-bold">{priceDisplay}</p>
            <p className="text-sm text-zinc-400">{setup}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${
                highlight
                  ? "bg-green-500 text-black hover:bg-green-400"
                  : "border border-zinc-700 text-zinc-50 hover:border-zinc-500"
              }`}
            >
              {cta}
            </button>
          </div>
        );
      })}
    </div>
  );
}
