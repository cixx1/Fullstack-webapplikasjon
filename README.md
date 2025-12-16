# Infoskjerm-salgsside (Fullstack-prosjekt)

## Konsept

Dette er en fullstack-løsning for salg og administrasjon av en **plug-and-play infoskjerm basert på Raspberry Pi**. 

Løsningen består av:
- **Salgsside** som presenterer produktet, fordeler, pakker (med dynamiske priser) og kontaktskjema
- **Admin-panel** for å se kundehenvendelser (leads) og redigere pakkepriser i sanntid
- **Backend API** som håndterer datalagring og henting fra database
- **Database** (Postgres) med tabeller for produkter, pakker og leads

Priser på pakker kan redigeres fra admin-panelet uten å redeploy koden — endringene vises umiddelbart på salgsiden.

## Teknologier

- **Frontend:** Next.js 16 med TypeScript og Tailwind CSS
- **Backend:** Node.js/Express med TypeScript
- **Database:** PostgreSQL 16 i Docker
- **Versjonskontroll:** Git/GitHub

## Mappestruktur

```
.
├── webapplikasjon/          # Next.js frontend-app
│   ├── app/
│   │   ├── page.tsx         # Salgsside (hero, fordeler, priser, kontakt)
│   │   ├── ContactForm.tsx  # Kontaktskjema (poster til /api/leads)
│   │   ├── PricingSection.tsx # Henter priser fra /api/packages dynamisk
│   │   ├── admin/
│   │   │   ├── page.tsx     # Admin-dashboard
│   │   │   ├── LeadsList.tsx # Viser alle leads fra database
│   │   │   └── PriceEditor.tsx # Rediger pakkepriser
│   ├── .env.local           # Miljøvariabler (NEXT_PUBLIC_API_URL)
│   └── package.json
├── backend/                 # Express backend
│   ├── src/
│   │   ├── server.ts        # API-endepunkter
│   │   ├── db.ts            # Database-tilkobling (Postgres Pool)
│   ├── .env                 # Miljøvariabler (DATABASE_URL, PORT)
│   └── package.json
├── database/                # Docker-setup
│   ├── docker-compose.yml   # Postgres container
│   ├── schema.sql           # Opprett tabeller
│   ├── seed.sql             # Testdata
├── docs/                    # Dokumentasjon
│   ├── plan.md              # Prosjektplan
│   ├── database.md          # Databasebeskrivelse
│   ├── queries.md           # SQL-eksempler
│   ├── ER-diagram.png       # ER-diagram
│   └── module1+2+3.md       # Oppgavetekst
└── README.md
```

## Setup og kjøring lokalt

### Forutsetnelser
- Docker og Docker Compose installert
- Node.js 18+ installert
- npm eller yarn

### 1. Starte databasen

```bash
cd database
docker compose up -d
```

Verifiser at Postgres kjører:
```bash
docker ps | grep postgres
```

### 2. Opprette tabeller og testdata

```bash
# Kopier SQL-filer til container
docker cp schema.sql fullstack_postgres:/tmp/schema.sql
docker cp seed.sql fullstack_postgres:/tmp/seed.sql

# Kjør schema (opprett tabeller)
docker exec -it fullstack_postgres psql -U postgres -d fullstack_db -f /tmp/schema.sql

# Kjør seed (legg inn testdata)
docker exec -it fullstack_postgres psql -U postgres -d fullstack_db -f /tmp/seed.sql
```

Verifiser at data ble opprettet:
```bash
docker exec fullstack_postgres psql -U postgres -d fullstack_db -c "SELECT * FROM leads;"
```

### 3. Starte backend

```bash
cd backend
npm install
npm run dev
```

Backend lytter på `http://localhost:3001` og bruker `.env` for `DATABASE_URL` og `PORT`.

### 4. Starte frontend

```bash
cd webapplikasjon
npm install
npm run dev
```

Åpne `http://localhost:3000` i nettleser. Admin-side er på `/admin`.

## API-endepunkter (Backend)

### Leads
- `POST /api/leads` – Opprett ny lead fra kontaktskjema
  - Body: `{ name, email, message }`
- `GET /api/leads` – Hent alle leads (sorter etter opprettelse, nyest først)

### Packages
- `GET /api/packages` – Hent alle pakker med priser
- `PUT /api/packages/:id` – Oppdater pris på en pakke
  - Body: `{ price }`

### Helse
- `GET /api/health` – Sjekk at backend kjører

## Bruk av admin-panelet

1. Gå til `http://localhost:3000/admin`
2. **Leads-seksjonen:** Se alle kundehenvendelser, klikk "Refresh" for å oppdatere
3. **Pakkepriser-seksjonen:** 
   - Klikk "Rediger" på en pakke for å endre pris
   - Skriv ny pris og klikk "Lagre"
   - Prisen oppdateres i database og vises på salgsiden (refresh siden for å se endring)

## Status per modul

### ✅ Modul 1 (Database)
- Docker Compose satt opp for Postgres
- Tabeller: `products`, `packages`, `leads` 
- Schema og seed inkludert
- ER-diagram i `docs/ER-diagram.png`
- SQL-dokumentasjon i `docs/queries.md`

### ✅ Modul 2 (Frontend)
- Salgsside med hero, fordeler, pakker, priser, kontaktskjema, footer
- Priser hentes nå dynamisk fra database (kan redigeres i admin)
- Responsiv design med Tailwind CSS
- TypeScript for type-sikkerhet

### ✅ Modul 3 (Backend)
- Express server med API for leads og packages
- GET/POST /api/leads for kundehenvendelser
- GET/PUT /api/packages for prisstyr
- Tilkoblet Postgres via environment variable

### 🎁 Bonus (Ej del av krav)
- Admin-panel med LeadsList og PriceEditor
- Dynamisk prisstyr uten redeploy

## Kjente bugs / mangler

- **Admin-side har ikke autentisering** – åpen for alle (OK for skoleprojekt, men bør ha passordvern i produksjon)
- **CSV-eksport fra leads** – planlagt, ikke implementert
- **Paginering i leads-listen** – hele listen lastes på en gang
- **Validering på kontaktskjema frontend** – bare HTML5 validation, ingen custom feilmeldinger
- **Ingen email-notifikasjon** – leads lagres i DB, men ingen varsling til admin

## Videreutviklingsmuligheter

1. **Autentisering på admin-side** – legg til passord eller OAuth
2. **Email-varsling** – send epost til admin når ny lead kommer inn
3. **CSV/Excel-eksport** – eksporter leads fra admin-panelet
4. **Paginering** – vis 10 leads per side i admin
5. **Søk og filtrering** – søk etter navn/epost i leads-lista
6. **Slette leads** – legg til mulighet for å fjerne leads fra admin
7. **Webhook** – integrer med CRM eller Slack for automatiske varslinger
8. **Analytics** – spor antall besøk, konversjoner osv.
9. **E-postskabloner** – automatisk svar til kunde som fyller inn skjema
10. **Flerspråk** – støtt engelsk, norsk osv.

## Dokumentasjon

- `docs/plan.md` – Prosjektplan med mål, teknologier, arbeidsform
- `docs/database.md` – Databaseskjema, tabell-beskrivelse
- `docs/queries.md` – SQL-eksempler (SELECT, INSERT, UPDATE)
- `docs/ER-diagram.png` – Visuelt diagram over tabeller og relasjoner

## Testing

### Manuell testing av kontaktskjema
1. Gå til `http://localhost:3000`
2. Scroll ned til "Kontakt" og fyll inn skjemaet
3. Klikk "Send forespørsel"
4. Gå til admin-panelet (`/admin`) og klikk "Refresh" under Leads
5. Du skal se din nye henvendelse i listen

### Manuell testing av prisstyr
1. Gå til admin-panelet (`http://localhost:3000/admin`)
2. Klikk "Rediger" på en pakke (f.eks. "Pro Service")
3. Endre pris og klikk "Lagre"
4. Gå tilbake til salgsiden (`/`) og refresh
5. Prisen skal være oppdatert

## Commit-historikk

Alle endringer er committed med deskriptive meldinger. Se `git log` for full historikk.

## Lisens

Skoleprojekt – ingen spesifikk lisens.