Tittel
Prosjektplan for Infoskjerm-salgsside

Mål

Lage en salgsside for et infoskjerm-produkt.

Vise produktet tydelig.

Lage en ren og funksjonell frontend.

Lage en dokumentert Postgres-database.

Skape et prosjekt med god struktur og mange commits.

Vise progresjon gjennom issues og commit-historikk.

Gjennomføre modul 1 og modul 2.

Teknologier

Next.js med TypeScript.

Tailwind CSS.

Lokal Postgres via Docker.

SQL-filer for tabeller og testdata.

GitHub for versjonskontroll og dokumentasjon.

Produktbeskrivelse
Infoskjerm-systemet er en plug-and-play løsning basert på Raspberry Pi.
Kunden får en boks som kobles til en skjerm.
Boksen viser informasjon som annonser, åpningstider eller meldinger.
Siden skal selge løsningen og forklare fordeler.
Siden skal også vise hva som følger med, priser og kontaktmuligheter.

Modul 1

Prosjektstruktur.

Planlegging.

Dokumentasjon.

Databaseplan.

ER-diagram.

SQL-struktur.

Hardkodet oppsett uten backend.

Modul 2

Frontend-komponenter i Next.js.

Layout og responsiv design.

Hardkodet innhold.

Testdata i database.

Dokumentasjon av arbeidsflyt.

Issues brukt som arbeidsoppgaver.

Jevnlige commits.

Database
Tabeller:
products

Produktnavn og beskrivelse av infoskjerm-løsningen.

Pris per enhet.

packages

Pakker kunden kan kjøpe.

Innhold og pris.

leads

Navn.

Epost.

Melding.

Lagres i modul 3, men tabellen opprettes i modul 1 og 2.

Filer i database-mappen:
schema.sql
seed.sql
docker-compose.yml

Frontend-seksjoner

Hero med kort salgstekst og knapp.

Fordeler med infoskjermen.

Seksjon som viser hva kunden får i pakken.

Priser.

Demo-seksjon for bilde eller video.

Kontaktform (kun frontend i modul 1 og 2).

Footer med kontaktinfo.

Arbeidsform

Jeg lager issues for hvert steg.

Jeg jobber fra issue til issue.

Jeg committer ofte.

Jeg pusher etter hver større oppgave.

Jeg dokumenterer alt i docs-mappen.