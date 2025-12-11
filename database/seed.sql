INSERT INTO products (name, description)
VALUES ('Infoskjerm-system', 'Plug-and-play Raspberry Pi infoskjerm-løsning for små bedrifter.');

INSERT INTO packages (product_id, name, price, features)
VALUES
(1, 'Basic Pakke', 5500, 'Raspberry Pi 5 ferdig programmert; 27\" skjerm; kabler/case/feste; hotspot-onboarding; USB-reset; oppsett på stedet; 1 måned gratis test; ingen løpende service'),
(1, 'Pro Service', 299, 'Månedlige innholdsoppdateringer; oppfølging av at skjermen virker; feilretting remote/på stedet; enkle tillegg som vær-visning'),
(1, 'Enterprise', 0, '6+ infoskjermer; tilpasset hardware og oppsett; serviceavtale, enkel administrasjon og oppstartshjelp; direkte dialog for behov; pris etter avtale');