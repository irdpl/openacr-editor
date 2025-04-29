<script>
	import YourReportProgress from "./YourReportProgress.svelte";
	import ProgressBar from "./ProgressBar.svelte";
	import ButtonShowHide from "./ButtonShowHide.svelte";
	import ReportNumbers from "./report/ReportNumbers.svelte";
	import { navigate } from "svelte-navigator";
	import { evaluation } from "../stores/evaluation.js";
	import { currentPage } from "../stores/currentPage.js";
	import { showYourReport } from "../stores/showYourReport.js";
	import { importEvaluation } from "../utils/importEvaluation.js";
	import { getEvaluatedChapterCriteriaComponents, getChapterCriteriaComponents, getProgressPerChapter } from "../utils/getEvaluatedItems.js";
	import { getCatalog } from "../utils/getCatalogs.js";
	import vars from "../../config/__buildEnv__.json";

	let fresh, box;

	function startNew() {
	navigate(`${vars.pathPrefix}/about`, { replace: false });
	fresh = false;
	}

	function toOverview() {
	navigate(`${vars.pathPrefix}/report`, { replace: false });
	}

	function clear() {
	//window.onbeforeunload = null;
	if (
	window.confirm(
	"Spowoduje to wyczyszczenie bieżącego OpenACR i rozpoczęcie nowego. Czy na pewno to jest to, co chcesz zrobić?"
	)
	) {
	evaluation.clearCache();
	navigate(`${vars.pathPrefix}/`, { replace: true });
	}
	}

	function toggleYourReport() {
	showYourReport.update(v => (v = !v));
	box.focus();
	}

	evaluation.subscribe(value => {
	fresh = evaluation.isFresh();
	});

	$: fresh = evaluation.isFresh();
	$: nameProvided =
	$evaluation["product"] &&
    $evaluation["product"]["name"];
  $: progressPerChapter = getProgressPerChapter($evaluation);
  $: evaluatedItems = getEvaluatedChapterCriteriaComponents($evaluation);
  $: totalCriteria = getChapterCriteriaComponents($evaluation);
  $: catalog = getCatalog($evaluation.catalog);
</script>

<style>
  .your-report {
    -ms-grid-column: 8;
    -ms-grid-column-span: 1;
    grid-column: 8 / span 2;
    -ms-grid-row: 2;
    grid-row-start: 2;
    align-self: start;
    justify-self: end;
    padding: 1em 0;
    border: 1px solid transparent;
    outline: none;
  }
  .your-report--expanded {
    background: var(--footer-grey);
    box-shadow: 0px 2px 8px -7px #000;
    border-color: var(--line-grey);
    margin-bottom: 2em;
    padding: 1em;
  }
  @media (min-width: 60em) {
    .your-report--expanded {
      position: sticky;
      top: 4em;
    }
  }
  summary > :first-child::before{
    align-content: center;
  }

  .your-report__heading {
    font-weight: bold;
    font-size: 1em;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .your-report__heading-pre {
    display: block;
    font-weight: normal;
    color: var(--dk-blue);
  }
  .your-report__import:focus + .your-report__import-label {
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-offset 0.2s linear;
    border-color: var(--w3c-blue);
    outline-color: var(--w3c-blue);
  }
  .your-report__progress-by-principle {
    columns: 1;
    column-gap: 1.5em;
    margin: 2.25em 0 1.75em 0;
    padding: 0;
  }
  :global(.your-report__description) {
    margin-bottom: 0.5em;
  }
  button,
  input {
    margin-bottom: 4px;
  }
</style>

<aside
	aria-labelledby="your-report"
  class="your-report"
  class:your-report--expanded={$showYourReport === true}
  bind:this={box}
  tabindex="-1"
  aria-live="polite">
  {#if $showYourReport === true}
    {#if fresh && $currentPage === 'Przegląd'}
      <h2 class="your-report__heading" id="your-report-lbl">
        Twój raport
        <ButtonShowHide expanded={true} on:toggle={toggleYourReport}>
          Ukryj
        </ButtonShowHide>
      </h2>
      <p>Nie rozpoczęto raportu.</p>
      <button class="button" on:click={startNew}>Rozpocznij nowy raport</button>
      <input
        type="file"
        id="import-evaluation"
        on:change={importEvaluation}
        class="visuallyhidden your-report__import"
        accept="application/yaml" />
      <label
        for="import-evaluation"
        class="button button-secondary your-report__import-label">
        Otwórz raport
      </label>
    {:else}
      <h2 class="your-report__heading">
        {#if nameProvided}
          <div>
            <small class="your-report__heading-pre">Raport dla</small>
            {$evaluation['product']['name']}
          </div>
        {:else}Twój raport{/if}
        <ButtonShowHide expanded={true} on:toggle={toggleYourReport}>
          Ukryj
        </ButtonShowHide>
      </h2>
      <ReportNumbers className="your-report__description" />
      <ProgressBar percentage={100 / (totalCriteria.length / evaluatedItems.length)} />
      <ul class="your-report__progress-by-principle">
        {#each catalog.chapters as chapter}
          {#if !$evaluation.chapters[chapter.id].disabled}
            <YourReportProgress
              {chapter}
              done={progressPerChapter[chapter.id]['evaluated']}
              total={progressPerChapter[chapter.id]['total']} />
          {/if}
        {/each}
      </ul>
      <button class="button" on:click={toOverview}>Pokaż Raport</button>
      {#if $currentPage === 'Przegląd'}
        <button type="button" class="button button-secondary" on:click={clear}>
          Nowy raport
        </button>
      {/if}
    {/if}
  {:else}
    <ButtonShowHide expanded={false} on:toggle={toggleYourReport}>
      Pokaż "Twój raport"
    </ButtonShowHide>
  {/if}
  </aside>
