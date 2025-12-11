Database
Postgres i Docker.
Tre tabeller: products, packages, leads.

products
id
name
description

packages
id
product_id
name
price
features (JSON eller TEXT)

leads
idl
name
email
message
created_at

Bruk
products brukes for det generelle infoskjerm-produktet.
packages beskriver Standard, Premium og Service-avtalen.
leads lagres senere når backend er ferdig.

SQL-filer
schema.sql oppretter tabeller.
seed.sql legger inn testdata.
queries.md viser eksempelselect.