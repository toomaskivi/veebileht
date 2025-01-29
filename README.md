See on [Next.js](https://nextjs.org) veebileht mis kasutab CSS-teeki [Tailwind](https://tailwindcss.com) ja [TypeScripti](https://www.typescriptlang.org).

## Muudatuste tegemine
1. Lisa [src/sections.ts](./src/sections.ts) faili uus sektsioon. Samas järjekorras ilmuvad sektsioonid menüüs.
2. Lisa [public](./public/) kausta uus ([PAKITUD!](https://squoosh.app/)) pilt, mille nimi on sama mis sai eelmises punktis sektsiooni sätestatud.
3. Lisa [tõlgete faili](./messages/et.json) faili uus sektsioon kasutades sektsiooni id-d nimena. Ära unusta lisada ka inglise keelsed tõlked.

## Tõlked
Kasutajaliidese tõlgete failid on [messages](./messages) kaustas.

Uue keele lisamiseks:
1) Lisa uue keele 2-kohaline kood koos keele nimega [src/languages.ts](./src/languages.ts) faili.
2) Lisa uue keele 2-kohaline kood [src/middleware.ts](./src/middleware.ts) faili `|`märgiga eraldatuna.
2) Duplikeeri [messages/et.json](./messages/et.json) faili ja asenda faili nimes `et` uue keele 2-kohalise koodiga.
3) Asenda loodud failis tõlked uue keele tõlgetega.

## Getting Started
Et jooksutada kohalikus arvutis serverit, installi [Node.js](https://nodejs.org/en/download) ja siis jooksuta:

```bash
npm run dev
```

Ava [http://localhost:3000](http://localhost:3000) veebilehitsejas, et kuvada lehte.

Võid koheselt muuta lehti ja komponenente. Leht lehitsejas uuendatakse automaatselt vastavalt muudatustele.

## Laivi lükkamine

1. Lisa kõik muudatused commit-i
2. Lisa commit sõnum ja vajuta `Commit`
3. Vajadusel vajuta `Sync`

Kõik muudatused lükatakse [GitHub-i](https://github.com/) koodibaasi ja automaatselt propageeritakse [Verceli](https://vercel.com/) kaudu laivi.

