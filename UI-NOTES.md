# Mentari UI-frissítés

A főoldal, a Research oldal és a két jogi aloldal közös arculatot kapott. Az eredeti bekezdések és kutatási hivatkozások megmaradtak. A szövegek tartalmi/szakmai felülvizsgálata nem része ennek a módosításnak.

## Változások

- Meleg törtfehér háttér, erdőzöld szöveg, serif címsorok, a felhasználó által küldött hero illusztráció két optimalizált WebP-méretben.
- Eltérő szekcióelrendezések, finom egyszeri belépési animáció, reduced-motion támogatás.
- Natív, billentyűzettel is kezelhető GYIK; mobilmenü; Escape-pel zárható és fókuszt megtartó kapcsolatablak.
- Kutatási tartalomjegyzék, fejezetenkénti horgonyok, aktív olvasási hely jelzése.
- Mobilon egyetlen rögzített letöltési link: https://onelink.to/ut5w3a. A külön App Store / Google Play és fejlécgombok rejtve maradnak. Keskeny képernyőn CSS, nagyobb mobilokon érintéses médiafeltétel és iOS/Android felismerés kapcsolja be ezt a módot.
- Asztali gépen a Get Started gomb a QR-kódos letöltési szekcióhoz görget. A QR-kód a OneLinkre mutat; alatta közvetlen, JavaScript nélkül is működő áruházlinkek találhatók.
- Közös styles.css és site.js; nincs új csomagfüggőség vagy buildlépés.

## Ellenőrzés

- Mind a négy HTML-dokumentum beágyazása ellenőrizve; minden eredeti bekezdés megmaradt.
- JavaScript-szintaxis és git diff whitespace-ellenőrzés.
- Főoldal: 320, 390, 768, 1024 és 1440 px; nincs vízszintes túlcsordulás a vizsgált szélességeken.
- Mobilmenü, GYIK nyitás, kapcsolatablak nyitás/Escape-zárás, kutatási horgonyok ellenőrizve böngészőben.
- Mobilon a látható letöltési hivatkozások száma 1, és a megadott OneLinkre mutat.
- A OneLink tényleges áruház-átirányítását fizikai iOS/Android eszközön még érdemes ellenőrizni; ez a teszt a weboldali linkre és láthatóságra terjedt ki.

## További javaslatok, külön tartalmi döntéshez

1. Valós alkalmazás-képernyőképek: a látogató már letöltés előtt láthatná a konkrét felületet. Jelenleg nincsenek ilyen képek a projektben; az új grafika illusztráció, nem kitalált alkalmazásfelület.
2. Vélemények hitelessége: az alapítói történet jelenleg felhasználói véleményként, 5.0 pontszámmal szerepel. Érdemes világosan elkülöníteni, a többi értékeléshez pedig ellenőrizhető eredetet társítani.
3. Kutatási állítások: az általános kutatási háttér és a konkrét Mentari alkalmazásra bizonyított eredmények közötti különbséget érdemes egyértelművé tenni. A gyógyulásra, depresszióra/szorongásra és a „thousands of young people” használói számra vonatkozó állítások külön ellenőrzést igényelnek.
4. Tartalmi következetesség: a marketingoldal ingyenes használatot hangsúlyoz, míg a jogi oldalak Freemium szolgáltatásról és alkalmazáson belüli vásárlásokról írnak. A tényleges üzleti modellhez kell egyeztetni őket.
5. Külső képfüggőségek: a meglévő logó és közösségi ikonok továbbra is külső szolgáltatókról érkeznek. Saját tárhelyen stabilabb lenne a betöltésük.

Az éles mentari.app telepítési állapota a tárhely beállításaitól függ; ez a változtatás önálló telepítési lépést nem tartalmaz.
