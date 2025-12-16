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
# Infoskjerm — fullstack prosjekt

Dette repository inneholder en fullstack-løsning for en salgs- og administrasjonsportal for en infoskjermløsning.

Kort fortalt:
- Frontend: Next.js-applikasjon som presenterer produkt, pakker og gir et kontaktskjema.
- Backend: Express API som håndterer leads og pakkepriser, koblet mot PostgreSQL.
- Database: PostgreSQL som initialiseres med `schema.sql` og `seed.sql`.

Oppdatert: 2025-12-16

## Nåværende prosjektstruktur

```
. 
├── docker-compose.yml        # Root Docker Compose som starter DB, backend og frontend
├── backend/                  # Express backend (TypeScript)
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       ├── server.ts         # API-endepunkter
│       └── db.ts             # Postgres-tilkobling
├── webapplikasjon/           # Next.js frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── .env.local            # Lokale frontend-variabler (ikke commit)
│   └── app/
│       ├── page.tsx
│       ├── ContactForm.tsx
│       ├── PricingSection.tsx
│       └── admin/
│           ├── page.tsx
│           ├── LeadsList.tsx
│           └── PriceEditor.tsx
├── database/
│   ├── schema.sql            # SQL for å opprette tabeller
│   └── seed.sql              # Testdata (seed)
└── docs/                     # Prosjektdokumentasjon
    ├── plan.md
    ├── database.md
    └── queries.md

```

Merk: Det finnes tidligere en `database/docker-compose.yml` for kun databasen; prosjektet bruker nå root `docker-compose.yml` som starter alle tjenester.

## Kjapt oppsett — kjør alt med én kommando

For å starte databasen, backend og frontend samtidig (anbefalt for utvikling):

```powershell
docker compose up -d
```

Når alle tjenester er oppe kan du åpne:
- Frontend: http://localhost:3000
- Backend:  http://localhost:3001

For å stoppe og fjerne containere:

```powershell
docker compose down
```

Hvis du trenger en ren database (slett volumene):

```powershell
docker compose down -v
docker compose up -d
```

## Kjøre tjenestene hver for seg

Backend
```powershell
cd backend
npm install
npm run dev
```

Frontend
```powershell
cd webapplikasjon
npm install
npm run dev
```

## Miljøvariabler

- Frontend: `webapplikasjon/.env.local`
  - `NEXT_PUBLIC_API_URL` skal peke til backend (f.eks. `http://localhost:3001`)
- Backend: `backend/.env`
  - `DATABASE_URL=postgres://postgres:postgres@postgres:5432/fullstack_db`
  - `PORT=3001`

## Database

`database/schema.sql` oppretter tabellene `products`, `packages` og `leads`.
`database/seed.sql` legger inn et eksempelprodukt og pakker.

Root `docker-compose.yml` monterer disse inn i Postgres ved oppstart slik at DB initialiseres automatisk.

## API-endepunkter

Leads
- `POST /api/leads` — opprett ny lead. Body: `{ name, email, message }`
- `GET /api/leads` — hent alle leads (nyeste først)

Packages
- `GET /api/packages` — hent alle pakker med priser
- `PUT /api/packages/:id` — oppdater pris. Body: `{ price }`

Helse
- `GET /api/health` — enkel healthcheck

## Admin

Admin-panelet ligger under `http://localhost:3000/admin`.
- Viser leads (kan oppdatere via Refresh)
- Lar deg redigere pakkepriser (endringer lagres i DB og vises på salgsiden)

Merk: Admin-panelet har i dag ingen autentisering.

## Status

- Database: ferdig (schema + seed)
- Backend: ferdig med API for leads og packages
- Frontend: ferdig med salgsiden, kontaktskjema, admin-komponenter
- Dynamisk prisstyring via DB: implementert

## Kjente mangler / risiko

- Ingen autentisering på admin
- Ingen epost-varsling ved ny lead
- Ingen paginering eller avansert søk i leads

## Videreutvikling (forslag)
- Legg til autentisering for admin
- E-post-varsling eller webhook
- CSV-eksport av leads
- Paginering og søk på leads

## Testing (kort)

Manuell test av kontaktskjema og prisendring:
1. Start med `docker compose up -d`
2. Åpne frontend `http://localhost:3000`
3. Send inn et kontaktskjema og sjekk at det vises i `http://localhost:3000/admin`
4. Rediger en pakke i admin og bekreft at prisen endres

## Commit melding for disse endringene

```
chore: Oppdater README til dagens tilstand og korriger mappestruktur

- Oppdaterer dokumentasjon for root docker-compose, Dockerfiles og kjør-instruksjoner
- Rettet og synkronisert mappestruktur
```

----

Hvis du vil at jeg skal gjøre en mindre forklaring eller legge til flere tekniske detaljer (f.eks. eksempel-requests for API), si ifra så legger jeg det til.
