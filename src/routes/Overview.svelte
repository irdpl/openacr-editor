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
	Ten edytor internetowy pomaga oceniającym tworzyć raporty zgodności zdostępnością w <a href="https://github.com/gsa/openacr" target="_blank">
		formacie OpenACR <span class="visuallyhidden">(otwiera się w nowym oknie lub karcie)</span></a>.
	Został zaprojektowany, aby pomóc ekspertom dostępności w tworzeniu dokumentów OpenACR nadających się do odczytu maszynowego. Autorzy zostaną poinstruowani podczas tworzenia dostępnego raportu dla produktu lub usługi cyfrowej, którą dokumentują. Zgodność z każdym wymaganiem można udokumentować zgodnie z wymaganiami w celu wygenerowania raportu z sekcji 508.
</p>

<p>Wskazówki dotyczące korzystania z tego narzędzia:</p>

<ul>
  <li>
	  Ten edytor zapisuje informacje, które wprowadzasz lokalnie w przeglądarce (nie na naszych serwerach). Aby zapisać lub udostępnić raport OpenACR, musisz zapisać go na swoim komputerze. Plik YAML będzie potrzebny do przesłania OpenACR i edytowania tego raportu w przyszłości.
  </li>
  <li>
	  Podczas korzystania z edytora na stronie
	  <Link to="report">Raport</Link>
	  znajduje się lista kryteriów sukcesu, które zostały sprawdzone i niesprawdzone.
  </li>
  <li>
	   Raport możesz wyeksportować jako YAML (uporządkowane dane), ale także jako HTML (strona internetowa). Uwaga: Nie będzie można edytować raportu w przyszłości bez pliku YAML.
  </li>
  <li>
	  Możesz dodać ograniczone formatowanie do raportu za pomocą języka <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank">Markdown <span class="visuallyhidden">(otwiera się w nowym oknie lub karcie)</span></a>. Pozwala to na dodawanie list, linków i przykładów kodu.

  </li>
</ul>

<ExpandCollapseAll />

<details>
  <summary>
    <HeaderWithAnchor id="about-openacr" level=2>O OpenACR</HeaderWithAnchor>
  </summary>
  <p>
	  OpenACR to cyfrowy natywny raport zgodności z dostępnością (ACR, od ang. <span lang="en">Accessibility Conformance Report</span> ). Początkowy tworzenie opiera się na wymaganiach sekcji 508. Przejście na format nadający się do odczytu maszynowego ma wiele zalet, ale jedną z największych jest to, że umożliwia porównywanie twierdzeń dotyczących dostępności produktów i usług cyfrowych. Przejście na format dokumentu o wysokiej strukturze, z samodzielną walidacją znacznie to ułatwi.
  </p>

	<p>
		
		

	</p>
  <p>
	  Wiele organizacji boryka się z wyzwaniami związanymi z dostarczaniem dostępnych usług dla osób z niepełnosprawnościami. Dostawcy oprogramowania obecnie przesyłają rekordy ACR dla swoich ofert. Te ACR dokumentują zgodność tych produktów i usług. Twierdzenia te są zazwyczaj dostarczane w formacie PDF, który jest często niedostępny, niespójnie ustrukturyzowany i trudny do wyszukania. Nowoczesna usługa ACR zostanie zweryfikowana, aby sprawdzić, czy jest zgodna z formatem punktu odniesienia.
  </p>
  <p>
	  Odpowiedzialne organizacje zarówno weryfikują oświadczenia dostawców dotyczące zgodności, jak i przeprowadzają niezależne testy. Dokumentowanie tych ustaleń w spójnym formacie ułatwi przekazywanie informacji zwrotnych dostawcom. Porównania ułatwią aktualizowanie raportów.
  </p>
  <p>
	  Aby uzyskać więcej informacji, zobacz <a href="https://github.com/GSA/openacr" target="_blank">OpenACR <span class="visuallyhidden">(otwiera się w nowym oknie lub karcie)</span></a>.
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
  <PagerLink to="/about" direction="następna">O OpenACR</PagerLink>
</Pager>
