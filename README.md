Prosjekt
Infoskjerm-salgsside for Raspberry Pi. Nettsiden selger tre pakker: Standard, Premium og Service-avtale. Løsningen viser produktfordeler, priser, innhold og kontaktmuligheter.

Teknologier
Next.js med TypeScript.
Tailwind CSS.
Postgres i Docker.
SQL-filer for tabeller og testdata.

Modul 1
Databaseoppsett med ER-diagram.
SQL-struktur i schema.sql.
Testdata i seed.sql.
docker-compose.yml for lokal Postgres.

Modul 2
Frontend med Next.js.
Hardkodet innhold.
Responsiv layout.
Ingen backend-kall.

Struktur
docs/
database/
frontend/ (Next-prosjektet)

Kjør database
docker compose up -d
Import schema.sql
Import seed.sql

Kjente mangler
Kontaktform lagrer ikke data enda.
Backend kommer i modul 3.

Videre utvikling
Express backend.
API for leads.
Adminpanel for leads-visning.