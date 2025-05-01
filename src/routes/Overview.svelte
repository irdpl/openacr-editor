<script>
  import { onMount } from "svelte";
  import { Link, useLocation } from "svelte-navigator";
  import ExpandCollapseAll from "../components/ExpandCollapseAll.svelte";
  import Header from "../components/Header.svelte";
  import Pager from "../components/Pager.svelte";
  import PagerLink from "../components/PagerLink.svelte";
  import { currentPage } from "../stores/currentPage.js";
  import HeaderWithAnchor from "../components/HeaderWithAnchor.svelte";
  import { honourFragmentIdLinks } from "../utils/honourFragmentIdLinks.js";
  import { evaluation } from "../stores/evaluation.js";
  import { getCatalog } from "../utils/getCatalogs.js";

  const location = useLocation();
  let catalog = getCatalog($evaluation.catalog);

  onMount(() => {
    currentPage.update((currentPage) => "Przegląd");

    honourFragmentIdLinks($location);
  });
</script>

<svelte:head>
  <title>Przegląd | Edytor OpenACR | LepszyWeb.pl</title>
</svelte:head>

<Header>Przegląd</Header>

<p>
	W tym edytorze stworzysz raport zgodności z dostępnością dowolnego produktu cyfrowego w&nbsp;<a href="https://github.com/gsa/openacr" target="_blank"></a>. Format OpenACR został zaprojektowany tak, aby pomóc ekspertom dostępności w&nbsp;tworzeniu raportów zgodności z&nbsp;dostępnością nadających się do odczytu maszynowego i generowania w dostępnym formacie HTML, które można w dowolnym momencie uaktualniać, w&nbsp;przeciwieństwie do dokumentów statycznych stworzonych w&nbsp;programie Word lub podobnym czy zapisanych w&nbsp;formacie PDF.
</p>

<p>Jak korzystać   z OpenACR:</p>

<ul>
	<li>
		Edytor działa lokalnie w Twojej przeglądarce internetowej. Informacje przechowuje w pamięci podręcznej przeglądarki (nie na naszych serwerach). Edytor generuje dokumenty wynikowe <q>w locie</q> w dwóch formatach: <strong>YAML</strong> (uporządkowane dane) oraz <strong>HTML</strong> (strona internetowa). Aby w przyszłości edytować opracowany lub niedokończony raport, niezbędny będzie plik YAML.
	</li>
	<li>
		Aby stworzyć nowy raport, wybierz z bocznego paska <Link to="about#your-report-lbl"><q>Twój raport</q>
		</Link>  przycisk <q>Rozpocznij nowy raport</q> lub <q>Nowy raport</q>. Aby edytować istniejący raport, wybierz przycisk <q>Otwórz</q>.

	</li>

	<li>
		W polach formularza możesz dodawać ograniczone formatowanie za pomocą języka <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank">Markdown <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a>. Pozwala to na dodawanie list, linków oraz przykładów kodu.

	</li>

	<li>
		Efekt pracy możesz znajdziesz w każdym momencie na stronie <Link to="report">Raport</Link>. Możesz tutaj pobrać dokumenty wynikowe. Możesz przeglądać listy kryteriów sukcesu, które zostały sprawdzone i niesprawdzone, z odnotowanymi wynikami oceny w przypadku kryteriów sprawdzonych.
	</li>



</ul>

<ExpandCollapseAll />

<details>
	<summary>
		<HeaderWithAnchor id="about-openacr" level="2">O OpenACR</HeaderWithAnchor>
	</summary>

	<p>
		Wiele organizacji <strong>chce</strong> albo <strong>ma prawny obowiązek</strong> zapewnić dostępność swoich produktów i&nbsp;usług cyfrowych oraz informować odbiorców o&nbsp;poziomie obsługi standardów dostępności, w&nbsp;tym o&nbsp;barierach i&nbsp;możliwościach ich obejścia, jeśli istnieją.
	</p>

	<p>
		Aby tym wyzwaniom sprostać, zamawiający oczekują od oferentów wykazania i udokumentowania, że ich produkty i usługi cyfrowe spełniają wymogi dostępności. A renomowani dostawcy oprogramowania dołączają do swoich produktów i usług oparte na <a href="https://www.itic.org/policy/accessibility/vpat" lang="en">dobrowolnym szablonie dostępności produktu</a> (VPAT™, od ang. <span lang="en">Voluntary Product Accessibility Template</span>), raporty zgodności z dostępnością (ACR, od ang. <span lang="en">Accessibility Conformance Report</span>).
	</p>

	<p>
		VPAT™ i ACR są zazwyczaj dostarczane albo w formatach dokumentów źródłowych Word (DOCX) czy Writer (ODT), albo w&nbsp;formacie PDF, które często są niedostępne, niespójnie ustrukturyzowane, trudne do przeszukiwania, do automatycznego porównywania wersji czy też porównywania podobnych produktów.
	</p>

	<p>
		OpenACR narodził się z potrzeby rozwiązania tych problemów przez dostarczenie techniki tworzenia raportów nadających się do odczytu maszynowego, która z kolei umożliwi łatwą aktualizację raportów, uzyskiwanie raportów w dostępnym formacie  HTML, automatyczne porównywania wersji, porównywanie podobnych produktów i twierdzeń dotyczących ich dostępności. Projekt OpenACR zamierza dostarczyć minimalny produkt gotowy do użycia z&nbsp;możliwością jego rozbudowy i&nbsp;udoskonalenia w miarę upływu czasu.

	</p>

	<p>
		Odpowiedzialne organizacje zarówno weryfikują oświadczenia dostawców dotyczące zgodności, jak i przeprowadzają niezależne testy. Dokumentowanie tych ustaleń w spójnym formacie ułatwi dostawcom przekazywanie informacji zwrotnych. Porównania ułatwią aktualizowanie raportów.
	</p>
	<p>
		Aby uzyskać więcej informacji, zobacz <a href="https://github.com/GSA/openacr" target="_blank">
			OpenACR <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span>
		</a>.
	</p>
</details>

<details>
  <summary>
    <HeaderWithAnchor id="structure-of-this-tool" level=2>Struktura tego narzędzia</HeaderWithAnchor>
  </summary>
  <p>
	  Zgodnie ze strukturą OpenACR, to narzędzie przeprowadza Cię przez 7
	  <strong>tabel/rozdziałów</strong>. Każda tabela/rozdział ma szereg
	  <strong>kryteriów</strong>, które są dalej podzielone na
	  <strong>komponenty</strong>. Dla każdego z nich można wybrać poziom i wpisać notatkę na temat zgodności.
  </p>
  <p>
	  A, AA, AAA są zgodne z  wytycznymi <strong>WCAG 2</strong>.
  </p>
  <p>
	  FPC, Sprzęt, Oprogramowanie, Dokumentacja to  standardy <strong>Section 508</strong>.
  </p>
  <p>
	  Łąćza w tym edytorze otworzą nowe okno, które przeniesie Cię do odpowiednich sekcji wytycznych.
  </p>
</details>

<details>
  <summary>
    <HeaderWithAnchor id="terms" level=2>Terminy</HeaderWithAnchor>
  </summary>
  <p>
	  Przechodząc przez oprogramowanie i wprowadzając jego zgodność, wybierzesz <q>termin</q> dla każdego komponentu. Oto legenda o tym, co oznaczają te wybory:
  </p>
  <dl>
    {#each catalog.terms as term}
      <dt>{term.label}</dt>
      <dd>{term.description}</dd>
    {/each}
  </dl>
</details>

<Pager label="Poprzednia/Następna wytyczna">
  <PagerLink to="/about" direction="następna">OpenACR</PagerLink>
</Pager>
