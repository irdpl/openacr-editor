<script>
  import { link } from "svelte-navigator";
  export let chapterId;

  function openFirstAccordion() {
    const firstAccordion = document.querySelector("details");
    firstAccordion.setAttribute("open", "");
  }
</script>

{#if chapterId}
  <p class="chapter-help-text">
	  {#if chapterId === "about"}
	  Skonfiguruj swój raport. Podaj ogólne informacje o swoim produkcie lub usłudze. Przedstaw jak najwięcej szczegółów. po skonfigurowaniu formularz internetowy zostanie zaktualizowany, aby wyświetlić tylko te sekcje, które należy wypełnić. Jeśli zechcesz później zmienić ustawienia, wybierz najpierw typ i katalog raportu.
	  {:else if chapterId === "success_criteria_level_a"}
	  Podaj informacje o tym, czy i jak Twoją witryna lub aplikacja internetowa obsługuje wymagania WCAG na poziomie A. Domyślnie jest to strona internetowa. Ale istnieją opcjonalne pola <a
        href="#1.1.1-electronic-docs-editor"
        on:click={() => openFirstAccordion()}>Dokumentacja elektroniczna</a
      >,
      <a href="#1.1.1-software-editor" on:click={() => openFirstAccordion()}
        >Oprogramowanie</a
      >
      oraz
      <a
        href="#1.1.1-authoring-tool-editor"
        on:click={() => openFirstAccordion()}>Narzędzia autorskie</a
      >. Wypełnij odpowiednio.
	  {:else if chapterId === "success_criteria_level_aa"}
	  Podaj informacje o tym, czy i jak Twoją witryna lub aplikacja internetowa obsługuje wymagania WCAG na poziomie AA. Domyślnie jest to strona internetowa. Ale istnieją opcjonalne pola  <a
        href="#1.2.4-electronic-docs-editor"
        on:click={() => openFirstAccordion()}>Dokumentacja elektroniczna</a
      >,
      <a href="#1.2.4-software-editor" on:click={() => openFirstAccordion()}
        >Oprogramowanie</a
      >
	  oraz
	  <a
        href="#1.2.4-authoring-tool-editor"
        on:click={() => openFirstAccordion()}>Narzędzia autorskie</a
      >. Fill out as appropriate.
	  {:else if chapterId === "success_criteria_level_aaa"}
	  Ta sekcja jest opcjonalna. Rozważ podanie informacji o obsłudze wymagań WCAG na poziomie AAA. Poziom AAA WCAG odzwierciedla cechy dostępności, które wykraczają poza minimalne wymagania. Przydatne jest opisanie, w jaki sposób twój produkt lub usługa przekracza wymagania poziomu AA. Ponadto niektórzy nabywcy i niektóre projekty mogą wymagać spełnienia określonych wymagań zdefiniowanych w WCAG na poziomie AAA.
	  {:else if chapterId === "functional_performance_criteria"}
	  Opisz tu bariery, jeśli nie zostały one uwzględnione w innych sekcjach. Podkreśl wpływ na różne rodzaje niepełnosprawności. Opcjonalnie, ta sekcja może być wykorzystana do podsumowania cech dostępności opisanych bardziej szczegółowo w innych miejscach.
	  {:else if chapterId === "hardware"}
	  Wypełnij tę sekcję, jeśli technologia informacyjno-komunikacyjna (TIK) obejmuje sprzęt.
	  {:else if chapterId === "software"}
	  Nie wypełniaj tej sekcji. Jeśli oprogramowanie jest aplikacją internetową lub jest renderowane przez przeglądarkę internetową. Wypełnij <a
        href="success_criteria_level_a"
        use:link>Tabelę 1, 2 i 3</a
      >. Wypełnij tę tylko wtedy sekcję, gdy twoje oprogramowanie nie jest oparte na technologiach internetowych. Typowym przykładem oprogramowania, które nie jest oparte na technologiach internetowych, są aplikacje desktopowe. Oprogramowanie, które wykorzystuje komunikację internetową, ale nie jest używane za pośrednictwem przeglądarki internetowej innej firmy (np. Chrome, Edge, Safari), nie jest oprogramowaniem internetowym.
	  {:else if chapterId === "support_documentation_and_services"}
	  Wypełnij tę sekcję, jeśli dokumentacja techniczna produktu nie jest oparta na technologiach internetowych (np. pliki MS Word, OpenOffice lub PDF).
	  {/if}
  </p>
{/if}
