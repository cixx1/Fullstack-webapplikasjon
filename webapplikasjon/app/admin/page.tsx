import LeadsList from "./LeadsList";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div>
          <p className="text-sm text-zinc-400">Admin</p>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <a
          href="/"
          className="rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-50 hover:border-zinc-500"
        >
          Tilbake til nettside
        </a>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-12">
        <section className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-zinc-400">Viser henvendelser fra kontaktskjema.</p>
            <LeadsList />
          </div>

          <div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-lg font-semibold">Innstillinger</h3>
              <p className="mt-2 text-sm text-zinc-400">Plassholder for admin-innstillinger, eksport og brukerstyring.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
