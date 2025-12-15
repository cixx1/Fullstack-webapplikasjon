Database
Postgres i Docker.
Tre tabeller: products, packages, leads.

products
- id
- name
- description

I dette prosjektet brukes én rad i products for infoskjerm-systemet.

packages
- id
- product_id
- name
- price
- features (TEXT)

Hver rad beskriver en pakke knyttet til infoskjerm-produktet:
- Basic Pakke (engangskjøp av hardware + oppsett)
- Pro Service (månedlig service uten binding)
- Enterprise (tilpasset løsning for 6+ skjermer, pris etter avtale)

leads
- id
- name
- email
- message
- created_at

Her skal kundehenvendelser fra kontaktskjema på nettsiden lagres (modul 3).

Bruk
- products brukes for å beskrive infoskjerm-produktet.
- packages beskriver Basic Pakke, Pro Service og Enterprise.
- leads skal brukes senere når backend er ferdig til å lagre henvendelser fra kunder.

SQL-filer
- schema.sql oppretter tabeller.
- seed.sql legger inn testdata.
- queries.md viser eksempelselect og insert.