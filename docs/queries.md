# Eksempelsql for infoskjerm-databasen

## Hente alle produkter

SELECT * FROM products; Brukes for å vise oversikt over alle hovedprodukter (infoskjerm-systemer).

## Hente alle pakker for infoskjerm-produktet

SELECT * FROM packages
WHERE product_id = 1;Brukes for å vise Basic Pakke, Pro Service og Enterprise som hører til infoskjerm-produktet.

## Legge inn en ny lead (kundehenvendelse)

INSERT INTO leads (name, email, message)
VALUES ('Ola Nordmann', 'ola@example.com', 'Jeg vil ha tilbud på 2 skjermer i butikken.');Brukes når noen sender inn kontaktskjema på nettsiden.

## Hente alle leads (for admin)

SELECT id, name, email, message, created_at
FROM leads
ORDER BY created_at DESC;Brukes for å vise henvendelser i et enkelt admin-grensesnitt.