<script>
	import { onMount } from "svelte";
	import { evaluation } from "../../stores/evaluation.js";
	import { validate } from "../../utils/validate.js";
	import { reportFilename } from "../../utils/reportFilename.js";
	import { license } from "../../utils/license.js";
	import { standardsIncluded } from "../../utils/getCatalogItems.js";
	import { getCatalog } from "../../utils/getCatalogs.js";

	const filename = reportFilename($evaluation);
	const valid = validate($evaluation);
	let catalog = getCatalog($evaluation.catalog);
	let mdDownload, mdTemplate, licenseOutput;

	if (valid.result) {
	licenseOutput = license($evaluation, "html");
	}

	mdTemplate = `# ${$evaluation.title}
	Oparte na ${catalog.title}

	## Nazwa produktu/Wersja
	${$evaluation["product"]["name"]} ${$evaluation["product"]["version"]}

	## Data raportu
	${$evaluation.report_date}`;

	if ($evaluation["product"]["description"]) {
	mdTemplate += `
	## Opis produktu
	${$evaluation["product"]["description"]}`;
	}

	mdTemplate += `
	## Informacje kontaktowe
	### Informacje o autorze
	- Nazwa: ${$evaluation["author"]["name"]}
	- Firma: ${$evaluation["author"]["company_name"]}
	- Adres: ${$evaluation["author"]["address"]}
	- E-mail: ${$evaluation["author"]["email"]}
	- Telefon: ${$evaluation["author"]["phone"]}
	- Witryna: ${$evaluation["author"]["website"]}

	### Vendor Information
	- Nazwa: ${$evaluation["vendor"]["name"]}
	- Firma: ${$evaluation["vendor"]["company_name"]}
	- Adres: ${$evaluation["vendor"]["address"]}
	- E-mail: ${$evaluation["vendor"]["email"]}
	- Telefon: ${$evaluation["vendor"]["phone"]}
	- Witryna: ${$evaluation["vendor"]["website"]}
	`;

	if ($evaluation["product"]["notes"]) {
	mdTemplate += `
	## Uwagi
	${$evaluation["product"]["notes"]}`;
	}

	if ($evaluation["product"]["evaluation_methods_used"]) {
	mdTemplate += `
	## Zastosowane metody oceny
	${$evaluation["product"]["evaluation_methods_used"]}`;
	}

	mdTemplate += `
	## Zastosowane Standardy/Wytyczne
	Ten raport obejmuje stopień zgodności z następującymi standardami/wytycznymi dostępności:

	| Standardy/Wytyczne | Uwzględnione w raporcie |
	| --- | --- |`;

	catalog.standards.forEach(standard => {
	mdTemplate += `
	| [${standard.label}](${standard.url}) | ${standardsIncluded($evaluation.catalog, standard.chapters)} |`;
	});

	mdTemplate += `

	## Terminy
	Terminy używane w informacjach o poziomie zgodności są zdefiniowane w następujący sposób:
	`;

	catalog.terms.forEach(term => {
	mdTemplate += `
	- **${term.label}**: ${term.description}`;
	});

	if ($evaluation["legal_disclaimer"]) {
	mdTemplate += `
	## Zastrzeżenia prawne (${$evaluation["vendor"]["company_name"]})
	${$evaluation["legal_disclaimer"]}`;
	}

	if ($evaluation["repository"]) {
	mdTemplate += `
	## Repozytorium
	${$evaluation["repository"]}`;
	}

	if ($evaluation["feedback"]) {
	mdTemplate += `
	## Informacje zwrotne
	${$evaluation["feedback"]}`;
	}

	mdTemplate += `

	## Copyright

	[OpenACR](https://github.com/GSA/openacr) jest formatem obsługiwanym przez [GSA](https://gsa.gov/). Odpowiedzialność za treść ponosi autor.

	Treść jest licencjonowana na warunkach ${licenseOutput}.`;

	onMount(() => {
	mdDownload = `data:text/markdown;charset=utf-8,${encodeURIComponent(mdTemplate)}`;
	});
</script>

{#if valid.result }
  <a href={mdDownload} download="{filename}.markdown" class="button">
    Pobierz raport (Markdown)
  </a>
{/if}
