Prosjektoppgave - Fullstack
ITA og ITB

NB: Sjekk innleverings-instruksene - det er best å begynne på disse med en gang, da blir det mindre rot.

Innleveringsinstrukser og krav til prosjektstruktur
Opprett en konto på GitHub.com
Lag et repository, feks 'fullstack-innlevering-1'
Dersom prosjekt ikke er åpent ("public"), legg til Edita som "collaborator" på dette repositoriet - brukernavn 'algebradamen'
Klone dette repositoriet til din utviklingsmappe
Åpne repositoriet i din IDE (Webstorm/VSCode)
Commit ofte, med gode meldinger på hva du har gjort underveis.
Push dine filer til GitHub. Push ofte.
Bruk av AI: Det er lov å bruke AI-verktøy. Men husk at AI-generert kode ofte er vanskelig å lese og forstå, og ofte inneholder skjulte feil. Du må kunne forklare og dokumentere all kode du leverer inn. Mao: bruk AI med omhu!
Legg lenke til repositoriet på innleveringen på It's. Dette skal gjøres samme dag som dere starter med prosjektet.
Innlevering av konsept og plan. Dette skal leveres senest på slutten av første dag av prosjektet. Denne plan skal legges i en fil som heter Plan.md. Dette skal være en kort oversikt over hvordan du planlegger å løse prosjektet, hvilke teknologier du skal bruke, og en grov tidsplan med funksjonalitet.
Bruk README.md til å dokumentere prosjekt.
NB: Dokumentasjon er minst like viktig som kode!

Dokumentasjon er en del av vurderingen. README-filen skal forklare overordnet hva prosjektet går ut på. Dokumentasjon er en helt sentral del av utviklingsjobben. Det er viktig å få med seg alle de viktigste punktene, og forklare disse godt.

Det skal også dokumenteres hvilke teknologier som er i bruk (feks postgres/mysql, docker, rammeverk osv), hva som skal til for å kjøre løsningen lokalt, eventuelle kjente bugs/feil/mangler, og eventuelle videreutviklingsmuligheter.

Dokumentasjonen kan godt fordeles i flere filer, feks "DATABASE.md" for å beskrive databasemodellen.

MEN: README.md skal alltid være tilstede i rotmappen, og lenke videre til all annen relevant dokumentasjon. Det skal ikke være nødvendig å lete etter dokumentasjon i andre mapper eller filer enn de som er lenket til i README.md.

Situasjonsbeskrivelse
Alternativ 1
Du skal lage websider for restaurant Tangen Torv. Websidene skal inneholde informasjon om restauranten, meny, åpningstider, kontaktinformasjon etc. I tillegg skal det være mulig å bestille bord via en bestillingsside. Dataene for meny og bestillinger skal lagres i en database. Det skal være egne sider for de ansatte der de kan se og administrere bestillingene. Oppgaven er delt i tre moduler.

Alternativ 2
Alternativt kan du finne et annet konsept du ønsker å lage en fullstack-løsning for. Det kan være en annen type bedrift, eller en organisasjon, eller noe helt annet. Imidlertid skal det ha tilsvarende teknologikrav som beskrevet under. Hvis du går for dette alternativet, må du også legge inn i README.md en kort beskrivelse av konseptet og funksjonaliteten, samme dag som prosjektet starter, og få en godkjenning av lærer.

Teknologikrav
Løsningen skal være et system bygget på

Modul 1: Database (feks mariadb/postgres). Den skal kunne startes ved hjelp av Docker og Docker-compose. Innleveringen bør bestå av:
En skisse / ER-diagram over databasemodellen. Dere kan bruke word, penn og papir, bilde eller valgfritt verktøy til å lage dette.
En SQL-fil som oppretter alle tabellene og relasjonene i databasen.
En dokumentert SQL-fil som viser de aktuelle SQL-setningene som trengs, feks sette inn en booking, hente ut bestillinger, etc.
Modul 2: Websider som viser planlagt funksjonalitet med HTML/CSS/JavaScript, men med statiske/hardkodede data.
Modul 3: Backend i NodeJS/Express som henter og lagrer data i databasen. Denne modulen skal vi jobbe videre med etter jul.
Vurdering av modul 1 og modul 2
Vurderingen vil baseres på følgende kriterier:

Databasemodell og bruk av database (normalisering, tabeller, relasjoner)
Kodekvalitet (struktur, lesbarhet, kommentarer, bruk av versjonskontroll). Dette gjelder både Javascript, HTML, CSS og SQL-filer.
Funksjonalitet, brukervennlighet og design på websider
Dokumentasjon av prosjektet