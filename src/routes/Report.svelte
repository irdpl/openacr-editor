<script>
  import { onMount } from "svelte";
  import { useLocation } from "svelte-navigator";
  import HeaderWithAnchor from "../components/HeaderWithAnchor.svelte";
  import ReportHeader from "../components/report/ReportHeader.svelte";
  import ReportSummary from "../components/report/ReportSummary.svelte";
  import ReportLicense from "../components/report/ReportLicense.svelte";
  import ReportValid from "../components/report/ReportValid.svelte";
  import ReportChapters from "../components/report/ReportChapters.svelte";
  import ReportZipDownload from "../components/report/ReportZipDownload.svelte";
  import ReportYAMLDownload from "../components/report/ReportYAMLDownload.svelte";
  import { evaluation } from "../stores/evaluation.js";
  import { currentPage } from "../stores/currentPage.js";
  import { honourFragmentIdLinks } from "../utils/honourFragmentIdLinks.js";
  import { getCatalog } from "../utils/getCatalogs.js";

  const location = useLocation();
  let catalog = getCatalog($evaluation.catalog);

  onMount(() => {
    currentPage.update(currentPage => "Raport");

    honourFragmentIdLinks($location);
  });
</script>

<svelte:head>
  <title>Raport | Edytor OpenACR | LepszyWeb.pl</title>
</svelte:head>

<ReportValid />

<HeaderWithAnchor id="download" level=2>Pobierz</HeaderWithAnchor>

<p>
  <ReportZipDownload />
  <ReportYAMLDownload />
</p>

<details>
  <summary>
    <HeaderWithAnchor id="download-help" level=3>Masz problemy z pobieraniem plików .zip?</HeaderWithAnchor>
  </summary>

  <p>
	  Niektóre organizacje i korporacje mają politykę zakazującą pobierania plików .zip. <strong>Jeśli nie możesz pobrać pliku .zip</strong> , możesz pobrać plik YAML, klikając powyższy link i zapisać plik HTML do wygodnego przeglądania:
  </p>

  <ol>
    <li>Kliknij prawym przyciskiem myszy w dowolnym miejscu tej strony i wybierz opcję Zapisz jako.</li>
    <li>Wybierz lokalizację, w której chcesz zapisać plik HTML.</li>
    <li>Udostępnij współpracownikom pobrany wcześniej plik lub folder HTML oraz plik YAML..</li>
    <li>Poinformuj swoich współpracowników, że mogą przeglądać wersję HTML pliku i wprowadzać zmiany, przechodząc do edytora OpenACR i przesyłając plik YAML. Po zakończeniu edycji muszą wysłać Ci plik YAML. Plik HTML jest opcjonalny.</li>
  </ol>
</details>

<ReportHeader />
{#each catalog.standards as standard}
  <ReportChapters {standard} />
{/each}
<ReportSummary />
{#if $evaluation.license }
  <HeaderWithAnchor id="license" level=2>Licencja</HeaderWithAnchor>
  <ReportLicense />
{/if}
