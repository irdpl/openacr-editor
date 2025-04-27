# Edytor OpenACR

Za pomocą tego narzędzia można wygenerować raport zgodności z wymogami dostępności w formacie [OpenACR](https://github.com/GSA/openacr).

## Narzędzia raportowania inicjatywy dostępności sieci Web (WAI) W3C

This software includes builds on the work from the WAI's [ATAG Report Tool (ART)](https://github.com/w3c/wai-atag-report-tool) and [WCAG-EM Report Tool](https://github.com/w3c/wai-wcag-em-report-tool/). Copyright © 2021 W3C® (MIT, ERCIM, Keio, Beihang).


Oprogramowanie to obejmuje kompilacje opracowane na podstawie narzędzi [ATAG Report Tool (ART)](https://github.com/w3c/wai-atag-report-tool) i [WCAG-EM Report Tool](https://github.com/w3c/wai-wcag-em-report-tool/). Prawa autorskie © 2021 W3C® (MIT, ERCIM, Keio, Beihang).


[Informacje i licencja oprogramowania W3C](https://www.w3.org/Consortium/Legal/copyright-software).

## Tworzenie

Ta aplikacja została zbudowana przy użyciu [Svelte](https://svelte.dev). Aby uruchomić ją lokalnie, musisz sklonować to repozytorium, zainstalować Node , a następnie uruchomić to w katalogu projektu:

```bash
npm install
```

Za pierwszym razem może to potrwać chwilę, ale wystarczy to zrobić tylko raz.

Następnie, aby zbudować aplikację za pomocą [Rollup](https://rollupjs.org) i udostępnić ją na lokalnym serwerze deweloperskim, uruchom:

```bash
export NODE_ENV=development; npm run dev
```

Przejdź do [localhost:10001](http://localhost:10001). Powinieneś zobaczyć swoją aplikację działającą. Edytuj plik komponentu w `src`, zapisz go i przeładuj stronę, aby zobaczyć zmiany.


Zastosowanie
Aby utworzyć zoptymalizowaną wersję aplikacji:



## Wdrożenie

Aby utworzyć zoptymalizowaną wersję aplikacji::

```bash
npm run build
```

### Wydanie na stronach GitHub

Witryna obsługuje to, co jest na stronach GitHub. Aby udostępnić na stronach GitHub, [utwórz nowe wydanie](https://github.com/GSA/openacr-editor/releases/new). Powinno to wywołać [akcję wdrożenia](https://github.com/GSA/openacr-editor/actions?query=workflow%3ADeploy).

### Zmienne środowiskowe w HTML i JavaScript (.svelte)

W niektórych kontekstach wdrażania, rzeczy takie jak ścieżki mogą wymagać zmiany. Są dwa kroki do tego:

1. Dodaj ustawienia specyficzne dla środowiska `config/[environment-name].json`, na przykład `{ pathPrefix: "/editor" }` lub `{ imageDir: "/images" }`
2. Przed uruchomieniem `npm run build` lub `npm run dev`, ustaw `export NODE_ENV=[environment-name]`

#### Używanie w HTML

Używaj zmiennych w HTML, `{{ variable-name }}` na przykład za pomocą `{{ pathPrefix }}`. . Jeśli potrzebujesz ich bez znaku ucieczki, użyj potrójnych nawiasów, na przykład `{{{ pathPrefix }}}`.

[Mustache](http://mustache.github.io/) zastępuje zmienne w `src/index.html` i umieszcza wynikowy kod HTML w `public/index.html`.

#### Używanie w JavaScript

W JavaScript, `__buildEnv__` jest zastępowane nazwą środowiska kompilacji za pomocą wtyczki [replace for rollup](https://github.com/rollup/plugins).

Aby użyć zmiennych, możesz zaimportować plik JSON, którego potrzebuje Twoje środowisko kompilacji, w następujący sposób:

```js
import vars from "../../config/__buildEnv__.json";
```

Zmienne znajdują się teraz w obiekcie `vars` object, Można się do nich odwoływać za pomocą `vars.variableName`, na przykład za pomocą`vars.pathPrefix`.

## Struktura danych

Edytor wykorzystuje [schemat](https://github.com/GSA/openacr/tree/main/schema) OpenACR  i [katalog](https://github.com/GSA/open-product-accessibility-template/tree/main/catalog) jako struktury danych.

# Dokumentacja integracji bloków zewnętrznych

## Przegląd









Funkcja External Blocks udostępniona przez Section 508 oferuje funkcjonalność płynnej integracji elementów nagłówka i stopki z witryny Section 508 z projektami zewnętrznymi. Ta dokumentacja opisuje kroki wymagane do włączenia elementów nagłówka i stopki Section 508 do witryny.

## Kroki integracji

Aby zintegrować nagłówek i stopkę sekcji 508 ze swoją witryną, wykonaj następujące kroki:

### 1. Dołącz pliki arkuszy stylów i JavaScript

Dodaj następujący arkusz stylów i pliki JavaScript do kodu HTML swojej witryny:

```html
<link
  rel="stylesheet"
  href="https://www.section508.gov/assets/css/external-blocks.css"
/>
<script
  defer
  src="https://www.section508.gov/assets/js/external-508-blocks.js"
></script>
<script defer src="https://www.section508.gov/assets/js/uswds.min.js"></script>
```

### Przykład

Oto przykład, jak zintegrować nagłówek i stopkę sekcji 508 z kodem HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Moja witryna</title>
    <!-- Include Section 508 stylesheet and JavaScript after Open ACR-->
    <link
      rel="stylesheet"
      href="https://www.section508.gov/assets/css/external-blocks.css"
    />
    <script
      defer
      src="https://www.section508.gov/assets/js/external-508-blocks.js"
    ></script>
    <script
      defer
      src="https://www.section508.gov/assets/js/uswds.min.js"
    ></script>
  </head>
  <body>
    <!-- Section 508 Header -->
    <div id="header-508"></div>

    <!-- Your Website Content Goes Here -->

    <!-- Section 508 Footer -->
    <div id="footer-508"></div>
  </body>
</html>
```

### Uwagi

- Upewnij się, że projekt Twojej witryny internetowej uwzględnia odpowiednią integrację nagłówka i stopki sekcji 508.
