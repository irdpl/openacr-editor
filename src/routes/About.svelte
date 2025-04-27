<script>
  import { onMount } from "svelte";
  import { useLocation } from "svelte-navigator";
  import Header from "../components/Header.svelte";
  import Pager from "../components/Pager.svelte";
  import HelpText from "../components/HelpText.svelte";
  import PagerLink from "../components/PagerLink.svelte";
  import { evaluation } from "../stores/evaluation.js";
  import { currentPage } from "../stores/currentPage.js";
  import ChapterHelpText from "../components/ChapterHelpText.svelte";
  import spdxLicenseList from "spdx-license-list";
  import Select from 'svelte-select';
  import helpText from "../data/helpText.yaml";
  import Related from "../components/Related.svelte";
  import AddOther from "../components/AddOther.svelte";
  import HeaderWithAnchor from "../components/HeaderWithAnchor.svelte";
  import ExpandCollapseAll from "../components/ExpandCollapseAll.svelte";
  import { honourFragmentIdLinks } from "../utils/honourFragmentIdLinks.js";
  import { reportFilename } from "../utils/reportFilename.js";
  import { getCatalog, getListOfCatalogs } from "../utils/getCatalogs.js";
  import { updateEvaluation } from "../utils/updateEvaluation.js";

  const location = useLocation();
  let catalog = getCatalog($evaluation.catalog);
  let catalogChoices = getListOfCatalogs();
  let selectedCatalog = $evaluation.catalog;

  onMount(() => {
    currentPage.update(currentPage => "About");

    honourFragmentIdLinks($location);
  });

  let spdxLicenses = [];
  for (const spdexLicenseListItem in spdxLicenseList) {
    spdxLicenses.push({
      value: spdexLicenseListItem,
      label: `${spdxLicenseList[spdexLicenseListItem].name} (${spdexLicenseListItem})`
    });
  }
  spdxLicenses.push({
    value: 'Invalid',
    label: 'Invalid License'
  });
  spdxLicenses.sort((a, b) => {
    let la = a.label.toLowerCase(),
        lb = b.label.toLowerCase();

    if (la < lb) {
        return -1;
    }
    if (la > lb) {
        return 1;
    }
    return 0;
  });

  function handleLicenseSelect(e) {
    $evaluation['license'] = e.detail.value;
    evaluation.updateCache($evaluation);
  }

  function handleLicenseClear(e) {
    $evaluation['license'] = "";
    evaluation.updateCache($evaluation);
  }

  function handleRelatedAdd() {
    const newRelatedOpenACR = {
      url: "",
      type: "primary"
    };

    $evaluation['related_openacrs'] = [...$evaluation['related_openacrs'], newRelatedOpenACR];
    evaluation.updateCache($evaluation);
  }

  function handleRelatedDelete(e) {
    if (window.confirm("Czy na pewno chcesz usunąć ten powiązany OpenACR?")) {
      const newValue = $evaluation['related_openacrs'];
      newValue.splice(e.detail, 1);
      $evaluation['related_openacrs'] = newValue;
      evaluation.updateCache($evaluation);
    }
  }

  function updateCatalog(e) {
    selectedCatalog = e.target.value;
  }

  function confirmCatalogChange(e) {
    if (
      window.confirm(
        "Przełączanie katalogów może spowodować usunięcie wprowadzonych danych i notatek z raportu ACR, które nie są częścią nowo wybranego katalogu.\n\nPrzed przełączeniem katalogów należy pobrać raport, aby uniknąć utraty informacji. Wybierz Anuluj, aby zapisać przed przełączeniem."
      )
    ) {
      $evaluation['catalog'] = selectedCatalog;
      updateEvaluation(selectedCatalog, $evaluation);
    }
  }

  function resetCatalogChange() {
    selectedCatalog = $evaluation['catalog'];
  }

  $: versionPrefix = reportFilename($evaluation, false);
</script>

<style>
  #evaluation-version {
    display: inline-block;
    width: unset;
  }
  input[readonly]:focus,
  input[readonly] {
    background-color: lightgrey !important;
  }
</style>

<svelte:head>
  <title>O edytorze | Edytor OpenACR | LepszyWeb.pl</title>
</svelte:head>

<Header>O edytorze</Header>

<ChapterHelpText
  chapterId="about"
  />

<ExpandCollapseAll />

<details open>
  <summary>
    <HeaderWithAnchor id="select-catalog" level=2>Wybierz typ raportu i katalog</HeaderWithAnchor>
  </summary>
  <p>{helpText["catalog"]["intro"]}</p>
  {#each catalogChoices as catalogChoice}
    <div class="field">
      <label>
        <input
          type="radio"
          value={catalogChoice.catalog}
          bind:group="{selectedCatalog}"
          id="evaluation-catalog-{catalogChoice.catalog}"
          on:change={updateCatalog} />

        {catalogChoice.title}
      </label>
      <HelpText type="catalog" field="{catalogChoice.catalog}" />
    </div>
  {/each}

  {#if $evaluation['catalog'] !== selectedCatalog }
    <p><em>Wybierz Przełącz katalogi, aby zapisać nowy wybór.</em></p>
  {/if}
  <button class="button" on:click={confirmCatalogChange} disabled={$evaluation['catalog'] === selectedCatalog} style="text-align: center; line-height: 1; padding: 10px;">Przełącz katalogi</button>
  <button class="button" on:click={resetCatalogChange} disabled={$evaluation['catalog'] === selectedCatalog} style="text-align: center; line-height: 1; padding: 10px;">Resetuj</button>
</details>

<details open>
  <summary>
    <HeaderWithAnchor id="product" level=2>Produky</HeaderWithAnchor>
  </summary>

  <div class="field">
    <label for="evaluation-product-name">Nazwa</label>
    <input
      type="text"
      bind:value={$evaluation['product']['name']}
      id="evaluation-product-name"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="product" field="name" />
  </div>

  <div class="field">
    <label for="evaluation-product-version">Wersja</label>
    <input
      type="text"
      bind:value={$evaluation['product']['version']}
      id="evaluation-product-version"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="product" field="version" />
  </div>

  <div class="field">
    <label for="evaluation-product-description">Opis</label>
    <textarea
      bind:value={$evaluation['product']['description']}
      id="evaluation-product-description"
      on:change={() => evaluation.updateCache($evaluation)} />
    <HelpText type="product" field="description" />
  </div>
</details>

<details open>
  <summary>
    <HeaderWithAnchor id="author" level=2>Autor</HeaderWithAnchor>
  </summary>

  <div class="field">
    <label for="evaluation-author-name">Nazwa</label>
    <input
      type="text"
      bind:value={$evaluation['author']['name']}
      id="evaluation-author-name"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="author" field="name" />
  </div>

  <div class="field">
    <label for="evaluation-author-company">Nazwa firmy</label>
    <input
      type="text"
      bind:value={$evaluation['author']['company_name']}
      id="evaluation-author-company"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="author" field="company_name" />
  </div>

  <div class="field">
    <label for="evaluation-author-address">Adres</label>
    <input
      type="text"
      bind:value={$evaluation['author']['address']}
      id="evaluation-author-address"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="author" field="address" />
  </div>

  <div class="field">
    <label for="evaluation-author-email">E-mail</label>
    <input
      type="email"
      bind:value={$evaluation['author']['email']}
      id="evaluation-author-email"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="author" field="email" />
  </div>

  <div class="field">
    <label for="evaluation-author-phone">Telefon</label>
    <input
      type="tel"
      bind:value={$evaluation['author']['phone']}
      id="evaluation-author-phone"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="author" field="phone" />
  </div>

  <div class="field">
    <label for="evaluation-author-website">Witryna (URL)</label>
    <input
      type="url"
      bind:value={$evaluation['author']['website']}
      id="evaluation-author-website"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="author" field="website" />
  </div>
</details>

<details open>
  <summary>
    <HeaderWithAnchor id="vendor" level=2>Sprzedawca</HeaderWithAnchor>
  </summary>

  <div class="field">
    <label for="evaluation-vendor-name">Nazwa</label>
    <input
      type="text"
      bind:value={$evaluation['vendor']['name']}
      id="evaluation-vendor-name"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="vendor" field="name" />
  </div>

  <div class="field">
    <label for="evaluation-vendor-company">Nazwa firmy</label>
    <input
      type="text"
      bind:value={$evaluation['vendor']['company_name']}
      id="evaluation-vendor-company"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="vendor" field="company_name" />
  </div>

  <div class="field">
    <label for="evaluation-vendor-address">Adres</label>
    <input
      type="text"
      bind:value={$evaluation['vendor']['address']}
      id="evaluation-vendor-address"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="vendor" field="address" />
  </div>

  <div class="field">
    <label for="evaluation-vendor-email">E-mail</label>
    <input
      type="email"
      bind:value={$evaluation['vendor']['email']}
      id="evaluation-vendor-email"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="vendor" field="email" />
  </div>

  <div class="field">
    <label for="evaluation-vendor-phone">Telefon</label>
    <input
      type="tel"
      bind:value={$evaluation['vendor']['phone']}
      id="evaluation-vendor-phone"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="vendor" field="phone" />
  </div>

  <div class="field">
    <label for="evaluation-vendor-website">Witryna (URL)</label>
    <input
      type="url"
      bind:value={$evaluation['vendor']['website']}
      id="evaluation-vendor-website"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="vendor" field="website" />
  </div>
</details>

<details open>
  <summary>
    <HeaderWithAnchor id="acr-report-details" level=2>Szczegóły raportu ACR</HeaderWithAnchor>
  </summary>

  <div class="field">
    <label for="evaluation-report-date">
      Data raportu
    </label>
    <input
      type="text"
      bind:value={$evaluation['report_date']}
      id="evaluation-report-date"
      on:change={() => evaluation.updateCache($evaluation)} />
    <HelpText type="report" field="report_date" />
  </div>

  <div class="field">
    <label for="evaluation-last-modified-date">
      Data ostatniej modyfikacji
    </label>
    <input
      type="text"
      readonly
      value={$evaluation['last_modified_date']}
      id="evaluation-last-modified-date" />
    <HelpText type="report" field="last_modified_date" />
  </div>

  <div class="field">
    <label for="evaluation-version">
      Wersja
    </label>
    <span class="version-prefix">{versionPrefix}-</span>
    <input
      type="number"
      readonly
      value={$evaluation['version']}
      id="evaluation-version" />
    <HelpText type="report" field="version" />
  </div>

  <div class="field">
    <label for="evaluation-notes">Uwagi</label>
    <textarea
      bind:value={$evaluation['notes']}
      id="evaluation-notes"
      on:change={() => evaluation.updateCache($evaluation)} />
    <HelpText type="report" field="notes" />
  </div>

  <div class="field">
    <label for="evaluation-evaluation-methods-used">Użyte metody oceny</label>
    <textarea
      bind:value={$evaluation['evaluation_methods_used']}
      id="evaluation-evaluation-methods-used"
      on:change={() => evaluation.updateCache($evaluation)} />
    <HelpText type="report" field="evaluation_methods_used" />
  </div>

  <div class="field">
    <label for="evaluation-legal-disclaimer">Zastrzeżenia prawne</label>
    <textarea
      bind:value={$evaluation['legal_disclaimer']}
      id="evaluation-legal-disclaimer"
      on:change={() => evaluation.updateCache($evaluation)} />
    <HelpText type="report" field="legal_disclaimer" />
  </div>

  <div class="field">
    <label for="evaluation-repository">Repozytorium (URL)</label>
    <input
      type="url"
      bind:value={$evaluation['repository']}
      id="evaluation-repository"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="report" field="repository" />
  </div>

  <div class="field">
    <label for="evaluation-feedback">Informacje zwrotne (URL)</label>
    <input
      type="url"
      bind:value={$evaluation['feedback']}
      id="evaluation-feedback"
      on:blur={() => evaluation.updateCache($evaluation)} />
    <HelpText type="report" field="feedback" />
  </div>

  <div class="field">
    <label for="evaluation-license">Licencja</label>
    <Select id="evaluation-license" inputStyles="border: 1px solid var(--grey);" items={spdxLicenses} value={$evaluation['license']} on:select={handleLicenseSelect} on:clear={handleLicenseClear} />
    <HelpText type="report" field="license" />
  </div>
</details>

<details open>
  <summary>
    <HeaderWithAnchor id="related-openacrs" level=2>Powiązane OpenACR-y</HeaderWithAnchor>
  </summary>

  <p>{helpText["related_openacrs"]["intro"]}</p>

  {#each $evaluation['related_openacrs'] as related, index}
    <Related id={index} count={index + 1} on:DELETE="{handleRelatedDelete}" />
  {/each}

  <AddOther label="Dodaj powiązane OpenACR" on:ADD="{handleRelatedAdd}" style="text-align: center; line-height: 1; padding: 5px;"></AddOther>
</details>

<details open>
  <summary>
    <HeaderWithAnchor id="disabled-chapters" level=2>Wyłączone rozdziały/tabele</HeaderWithAnchor>
  </summary>

  <p>{helpText["disabled_chapters"]["intro"]}</p>

  {#each catalog.chapters as chapter}
    <div class="field">
      <label>
        <input
          type="checkbox"
          value={chapter.id}
          bind:checked="{$evaluation['chapters'][chapter.id]['disabled']}"
          id="evaluation-disabled-chapter-{chapter.id}"
          on:change={() => evaluation.updateCache($evaluation)} />

        {chapter.label}
      </label>
      <HelpText type="disabled_chapters" field="{chapter.id}" />
    </div>
  {/each}
</details>

<Pager label="Poprzednia/Następna">
  <PagerLink to="/" direction="previous">Przegląd</PagerLink>
  <PagerLink to="/chapter/success_criteria_level_a" direction="next">A</PagerLink>
</Pager>
