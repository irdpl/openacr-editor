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
      Podaj ogólne informacje o swoim produkcie lub usłudze. Prosimy o podanie  jak najwięcej szczegółów. Gdy opiszesz swój produkt, formularz internetowy zostanie zaktualizowany, aby wyświetlić tylko te sekcje, które należy wypełnić. Jeśli będziesz potrzebować zmienić później, zmień pytania dotyczące informacji o produkcie.
    {:else if chapterId === "success_criteria_level_a"}
      Przekazuj informacje o problemach na poziomie A związanych z Twoją witryną lub aplikacją internetową. Obecnie OpenACR obsługuje tylko WCAG 2.0. Domyślnie jest to strona internetowa i istnieją opcjonalne pola dla <a
        href="#1.1.1-electronic-docs-editor"
        on:click={() => openFirstAccordion()}>Dokumentacja</a
      >,
      <a href="#1.1.1-software-editor" on:click={() => openFirstAccordion()}
        >Oprogramowanie</a
      >
      and
      <a
        href="#1.1.1-authoring-tool-editor"
        on:click={() => openFirstAccordion()}>Authoring</a
      >. Wypełnij odpowiednio.
    {:else if chapterId === "success_criteria_level_aa"}
      Podaj informacje o tym, w jaki sposób Twoja witryna lub aplikacja internetowa nie spełnia wymagań poziomu AA. Obecnie OpenACR obsługuje tylko WCAG 2.0. Domyślnie Domyślnie jest to strona internetowa i istnieją opcjonalne pola dla <a
        href="#1.2.4-electronic-docs-editor"
        on:click={() => openFirstAccordion()}>Dokumentacja</a
      >,
      <a href="#1.2.4-software-editor" on:click={() => openFirstAccordion()}
        >Oprogramowanie</a
      >
      and
      <a
        href="#1.2.4-authoring-tool-editor"
        on:click={() => openFirstAccordion()}>Authoring</a
      >. Fill out as appropriate.
    {:else if chapterId === "success_criteria_level_aaa"}
      Ta sekcja jest opcjonalna. Rozważ podanie informacji o obsłudze poziomu AAA w swojej witrynie lub aplikacji internetowej. WCAG Poziom AAA odzwierciedla funkcje dostępności, które przekraczają minimalne wymagania sekcji 508. Przydatne jest opisanie, w jaki sposób twój produkt lub usługa przekracza wymagania poziomu AA. Ponadto niektórzy użytkownicy końcowi i niektóre projekty mogą wymagać spełnienia określonych wymagań AAA.
    {:else if chapterId === "functional_performance_criteria"}
      Opisz tutaj bariery, jeśli nie zostały one uwzględnione w innych sekcjach. Podkreśl wpływ na różne rodzaje niepełnosprawności. Opcjonalnie, ta sekcja może być wykorzystana do podsumowania cech dostępności opisanych bardziej szczegółowo w innych miejscach.
    {:else if chapterId === "hardware"}
      Jeśli technologia informacyjno-komunikacyjna (ICT) obejmuje sprzęt, należy wypełnić tę sekcję.
    {:else if chapterId === "software"}
      Jeśli oprogramowanie jest aplikacją internetową lub jest renderowane przez przeglądarkę internetową, nie wypełniaj tej sekcji. Wypełnij <a
        href="success_criteria_level_a"
        use:link>Tabela 1, 2 i 3</a
      >. Wypełnij tę sekcję, jeśli twoje oprogramowanie nie jest oparte na sieci. Aplikacje desktopowe są powszechnym przykładem oprogramowania, które nie jest oparte na sieci. Oprogramowanie, które wykorzystuje komunikację internetową, ale nie jest używane za pośrednictwem przeglądarki internetowej innej firmy (np. Chrome, Edge, Safari), nie jest oprogramowaniem internetowym.
    {:else if chapterId === "support_documentation_and_services"}
      Jeśli dokumentacja wsparcia dla produktu nie jest oparta na sieci Web (np. pliki MS Word, OpenOffice lub PDF), wypełnij tę sekcję.
    {/if}
  </p>
{/if}
