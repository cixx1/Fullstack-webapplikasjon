import ContactForm from "./ContactForm";
import PricingSection from "./PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex-1 space-y-4">
          <p className="inline-flex items-center rounded-full bg-green-600/15 px-3 py-1 text-sm font-semibold text-green-400">
            Plug-and-play infoskjerm for Raspberry Pi
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Gjør enhver skjerm til en proff infoskjerm på få minutter.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Ferdig programmert Raspberry Pi som gjør TV-en til infoskjerm uten
            teknisk oppsett. Koble til strøm og HDMI, følg 3 enkle steg i
            mobilnettleseren, og skjermen viser riktig side i fullskjerm hver gang.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-lg bg-green-500 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:bg-green-400"
              href="#pricing"
            >
              Se prispakker
            </a>
            <a
              className="rounded-lg border border-zinc-700 px-6 py-3 text-base font-semibold text-zinc-50 transition hover:border-zinc-500 hover:text-white"
              href="#contact"
            >
              Book en demo
            </a>
            <a
              className="rounded-lg border border-zinc-700 px-6 py-3 text-base font-semibold text-zinc-50 transition hover:border-zinc-500 hover:text-white"
              href="/admin"
            >
              Admin
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              2-minutters oppsett via eget hotspot
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Selvreparerende nett og offline-buffer
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              USB-reset for nytt sted
            </span>
          </div>
        </div>
        <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-xl shadow-black/20">
          <p className="text-sm font-semibold text-green-400">Klar til bruk</p>
          <h3 className="mt-2 text-2xl font-bold">Raspberry Pi infoskjerm</h3>
          <p className="mt-3 text-sm text-zinc-300">
            Ferdig image, auto-hotspot for første oppsett og fullskjerm
            nettleser som starter riktig URL hver gang. Kun strøm og HDMI.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-200">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <p className="font-semibold">Automatisk oppstart</p>
              <p className="text-xs text-zinc-400">Starter infoskjerm ved strøm</p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <p className="font-semibold">Offline-buffer</p>
              <p className="text-xs text-zinc-400">Viser sist lagrede innhold</p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <p className="font-semibold">Oppetid</p>
              <p className="text-xs text-zinc-400">Monitorering og varsling</p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <p className="font-semibold">Cloud-styring</p>
              <p className="text-xs text-zinc-400">Endre innhold fra nett</p>
            </div>
          </div>
          <a
            href="#contact"
            className="mt-6 block rounded-lg bg-green-500 px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-green-400"
          >
            Få et tilbud
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <section
          id="benefits"
          className="grid gap-6 rounded-2xl border border-zinc-900 bg-zinc-900/40 p-8 md:grid-cols-3"
        >
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-wide text-green-400">
              Hvorfor velge oss?
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Fordeler som gjør infoskjermen enkel å eie.
            </h2>
          </div>
          <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
            {[
              {
                title: "Eget WiFi for oppsett",
                desc: "Pi-en lager et enkelt oppsett-nett. Skriv inn WiFi og skjerm-ID, så er du i gang.",
              },
              {
                title: "Starter alltid selv",
                desc: "Hvis nettet forsvinner, prøver den igjen og viser sist lagrede innhold mens du venter.",
              },
              {
                title: "Fullskjerm automatisk",
                desc: "Åpner riktig nettside i fullskjerm etter strømbrudd eller omstart, uten tastatur og mus.",
              },
              {
                title: "USB-reset når som helst",
                desc: "Sett inn reset-USB, så får du nytt oppsett. Ta den ut, og alt er klart på nytt sted.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-900 bg-zinc-950/50 p-4 shadow-inner shadow-black/20"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="package"
          className="rounded-2xl border border-zinc-900 bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-black/60 p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wide text-green-400">
                Hva følger med?
              </p>
              <h2 className="text-2xl font-bold">Alt du trenger i én boks.</h2>
              <p className="max-w-2xl text-sm text-zinc-300">
                Vi sender en komplett pakke slik at du kan koble til og starte.
                Trenger du skjerm eller montering, kan vi levere som tillegg.
              </p>
            </div>
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-200">
              Levering 2–4 virkedager
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Raspberry Pi med ferdig image",
              "Eget WiFi for første oppsett",
              "Enkel side for å legge inn WiFi + skjerm-ID",
              "Fullskjerm-visning av din nettside hver gang den starter",
              "USB-reset for ny lokasjon",
              "Styring av innhold fra nettleser",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-200"
              >
                <span className="h-2 w-2 rounded-full bg-green-400" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-green-400">
                Prispakker
              </p>
              <h2 className="text-2xl font-bold">Velg pakken som passer deg.</h2>
              <p className="text-sm text-zinc-300">
                Som 17-åring gründer tilbyr jeg enkel plug-and-play hardware.
                Basic er et engangskjøp uten service. Pro er valgfri service når du
                vil ha hjelp med innhold og drift.
              </p>
            </div>
            <p className="text-xs text-zinc-500">
              Hardware inkludert i Basic – ingen ekstra kostnader for oppsett!
            </p>
          </div>
          <PricingSection />
        </section>

        <section
          id="demo"
          className="grid gap-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 md:grid-cols-2"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-green-400">Demo</p>
            <h2 className="text-2xl font-bold">Se hvordan det ser ut i praksis.</h2>
            <p className="text-sm text-zinc-300">
              Vi viser live fra webportalen, hvordan hotspot-oppsettet ser ut,
              og en ekte Pi som starter i kiosk-modus. Be om demo, så får du
              videolenke og test-innlogging.
            </p>
            <ul className="space-y-2 text-sm text-zinc-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-400" />
                Fjernstyr bilder, video og meldinger
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-400" />
                Planlegg innhold etter klokkeslett og ukedager
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-400" />
                Se status på hver skjerm i sanntid
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-900/60 p-4 shadow-inner shadow-black/20">
            <div className="aspect-video w-full rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
              <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                Demo / video placeholder
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Legg inn lenke til en video eller live skjermdeling her.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 md:grid-cols-2"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-green-400">
              Kontakt
            </p>
            <h2 className="text-2xl font-bold">Fortell oss om behovet ditt.</h2>
            <p className="text-sm text-zinc-300">
              Vi svarer innen én arbeidsdag. Ingen binding før du bekrefter
              bestillingen.
            </p>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-white">E-post</p>
              <p className="text-zinc-300">cornelius.jors9@gmail.com</p>
              <p className="font-semibold text-white">Telefon</p>
              <p className="text-zinc-300">+47 469 12 518</p>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-zinc-900 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-white">Infoskjerm AS</p>
            <p>Org.nr 123 456 789</p>
            <p>cornelius.jors9@gmail.com · +47 469 12 518</p>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#benefits">
              Fordeler
            </a>
            <a className="hover:text-white" href="#pricing">
              Priser
            </a>
            <a className="hover:text-white" href="#contact">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
