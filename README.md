# Infoskjerm-salgsside (Fullstack-prosjekt)

Dette er en fullstack-løsning for salg av en plug-and-play infoskjerm basert på Raspberry Pi.  
Nettsiden selger tre pakker: Basic Pakke, Pro Service og Enterprise, og viser fordeler, innhold og kontaktmuligheter.

## Teknologier

- Next.js med TypeScript (frontend) – mappe: `webapplikasjon/`
- Tailwind CSS (design)
- Postgres i Docker (database) – mappe: `database/`
- SQL-filer for tabeller (`schema.sql`) og testdata (`seed.sql`)

## Struktur

- `webapplikasjon/` – Next.js-appen (frontend)
- `database/` – Docker Compose, schema.sql, seed.sql
- `docs/` – plan, databasebeskrivelse, ER-diagram, SQL-queries, oppgavetekst

## Kjøre databasen lokalt

cd database
docker compose up -d

# Opprette tabeller
docker cp schema.sql fullstack_postgres:/tmp/schema.sql
docker cp seed.sql fullstack_postgres:/tmp/seed.sql
docker exec -it fullstack_postgres psql -U postgres -d fullstack_db -f /tmp/schema.sql
docker exec -it fullstack_postgres psql -U postgres -d fullstack_db -f /tmp/seed.sqlSe også `docs/database.md` og `docs/queries.md` for mer info om tabeller og SQL.

## Kjøre frontend (Next.js)

cd webapplikasjon
npm install
npm run devÅpne `http://localhost:3000` i nettleser.

## Status per modul

- **Modul 1 (database):**  
  - Docker Compose satt opp for Postgres  
  - Tabeller (`products`, `packages`, `leads`) i `schema.sql`  
  - Testdata for pakkene i `seed.sql`  
  - ER-diagram i `docs/ER-diagram.png`  
  - Dokumentasjon i `docs/database.md` og `docs/queries.md`

- **Modul 2 (frontend):**  
  - Salgsside i Next.js med hero, fordeler, pakke-innhold, priser, demo-seksjon, kontaktskjema og footer  
  - All tekst hardkodet (ingen API-kall enda)

- **Modul 3 (backend):**  
  - Backend og API for leads planlegges (ikke implementert enda)