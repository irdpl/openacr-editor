<script>
  import Header from "../Header.svelte";
  import HeaderWithAnchor from "../HeaderWithAnchor.svelte";
  import { evaluation } from "../../stores/evaluation.js";
  import { standardsIncluded } from "../../utils/getCatalogItems.js";
  import { sanitizeMarkdown } from "../../utils/sanitizeMarkdown.js";
  import { reportFilename } from "../../utils/reportFilename.js";
  import { getCatalog } from "../../utils/getCatalogs.js";

  $evaluation.title = $evaluation["product"]["name"] + " Raport zgodności z dostępnością";

  export let download = false;
  let catalog = getCatalog($evaluation.catalog);
</script>

<Header>{$evaluation.title}</Header>

Oparty na {catalog.title}
<HeaderWithAnchor id="name-of-product-version" level=2 {download}>Nazwa produktu/Wersja</HeaderWithAnchor>
{$evaluation["product"]["name"]} {#if $evaluation["product"]["version"]} {$evaluation["product"]["version"]}{/if}

<HeaderWithAnchor id="report-date" level=2 {download}>Data i wersja raportu</HeaderWithAnchor>
<ul>
  <li>Data raportu: {$evaluation.report_date}</li>
  <li>Data ostatniej modyfikacji: {$evaluation.last_modified_date}</li>
  <li>Wersja: {reportFilename($evaluation)}</li>
</ul>

{#if $evaluation["product"]["description"]}
  <HeaderWithAnchor id="product-description" level=2 {download}>Opis produktu</HeaderWithAnchor>
  {@html sanitizeMarkdown($evaluation["product"]["description"])}
{/if}

<HeaderWithAnchor id="contact-information" level=2 {download}>Informacje kontaktowe</HeaderWithAnchor>
{#if $evaluation["author"]}
  <HeaderWithAnchor id="author" level=3 {download}>Informacje o autorze</HeaderWithAnchor>
  <ul>
    {#if $evaluation["author"]["name"]}<li>Nazwa: {$evaluation["author"]["name"]}</li>{/if}
    {#if $evaluation["author"]["company_name"]}<li>Firma: {$evaluation["author"]["company_name"]}</li>{/if}
    {#if $evaluation["author"]["address"]}<li>Adres: {$evaluation["author"]["address"]}</li>{/if}
    {#if $evaluation["author"]["email"]}<li>E-mail: <a href="mailto:{$evaluation['author']['email']}" target="_blank">{$evaluation["author"]["email"]} <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a></li>{/if}
    {#if $evaluation["author"]["phone"]}<li>Telefon: {$evaluation["author"]["phone"]}</li>{/if}
    {#if $evaluation["author"]["website"]}<li>Witryna: <a href="{$evaluation['author']['website']}" target="_blank">{$evaluation["author"]["website"]} <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a></li>{/if}
  </ul>
{/if}
{#if $evaluation["vendor"]}
  <HeaderWithAnchor id="vendor" level=3 {download}>Informacje o dostawcy</HeaderWithAnchor>
  <ul>
    {#if $evaluation["vendor"]["name"]}<li>Nazwa: {$evaluation["vendor"]["name"]}</li>{/if}
    {#if $evaluation["vendor"]["company_name"]}<li>Firma: {$evaluation["vendor"]["company_name"]}</li>{/if}
    {#if $evaluation["vendor"]["address"]}<li>Adres: {$evaluation["vendor"]["address"]}</li>{/if}
    {#if $evaluation["vendor"]["email"]}<li>E-mail: <a href="mailto:{$evaluation['vendor']['email']}" target="_blank">{$evaluation["vendor"]["email"]} <span class="visuallyhidden">(otwiera nowe okno lub kartę)</span></a></li>{/if}
    {#if $evaluation["vendor"]["phone"]}<li>Telefon: {$evaluation["vendor"]["phone"]}</li>{/if}
    {#if $evaluation["vendor"]["website"]}<li>Witryna: <a href="{$evaluation['vendor']['website']}" target="_blank">{$evaluation["vendor"]["website"]} <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a></li>{/if}
  </ul>
{/if}

{#if $evaluation["notes"]}
  <HeaderWithAnchor id="notes" level=2 {download}>Uwagi</HeaderWithAnchor>
  {@html sanitizeMarkdown($evaluation["notes"])}
{/if}

{#if $evaluation["evaluation_methods_used"]}
  <HeaderWithAnchor id="evaluation-methods" level=2 {download}>Zastosowane metody oceny</HeaderWithAnchor>
  {@html sanitizeMarkdown($evaluation["evaluation_methods_used"])}
{/if}

<HeaderWithAnchor id="applicable-standards-guidelines" level=2 {download}>Zastosowany standard/wytyczne</HeaderWithAnchor>
Ten raport obejmuje stopień zgodności z następującymi standardami/wytycznymi dostępności:

<table>
  <thead>
    <tr>
      <th>Standard/Wytyczne</th>
      <th>Uwzględniono w raporcie</th>
    </tr>
  </thead>
  <tbody>
    {#each catalog.standards as standard }
      <tr>
        <td><a href="{standard.url}" target="_blank">{standard.label} <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a></td>
        <td>{@html standardsIncluded($evaluation.catalog, standard.chapters)}</td>
      </tr>
    {/each}
  </tbody>
</table>

<HeaderWithAnchor id="terms" level=2 {download}>Słownik</HeaderWithAnchor>
Terminy używane w informacjach o poziomie zgodności są zdefiniowane w następujący sposób:
<ul>
{#each catalog.terms as term}
  <li><strong>{term.label}</strong>: {term.description}</li>
{/each}
</ul>
