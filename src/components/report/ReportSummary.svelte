<script>
  import HeaderWithAnchor from "../HeaderWithAnchor.svelte";
  import { evaluation } from "../../stores/evaluation.js";
  import { sanitizeMarkdown } from "../../utils/sanitizeMarkdown.js";

  export let download = false;
</script>

{#if $evaluation["legal_disclaimer"]}
  <HeaderWithAnchor id="legal-disclaimer" level=2 {download}>
    Zastrzeżenia prawne {#if $evaluation["vendor"]["company_name"]}({$evaluation["vendor"]["company_name"]}){/if}
  </HeaderWithAnchor>
  {@html sanitizeMarkdown($evaluation["legal_disclaimer"])}
{/if}
{#if $evaluation["repository"]}
  <HeaderWithAnchor id="repository" level=2 {download}>Repozytorium</HeaderWithAnchor>
  <a href="{$evaluation["repository"]}" target="_blank">{$evaluation["repository"]} <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a>
{/if}
{#if $evaluation["feedback"]}
  <HeaderWithAnchor id="feedback" level=2 {download}>Informacje zwrotne</HeaderWithAnchor>
  <a href="{$evaluation["feedback"]}" target="_blank">{$evaluation["feedback"]} <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a>
{/if}
{#if $evaluation["related_openacrs"] && $evaluation["related_openacrs"].length > 0}
  <HeaderWithAnchor id="related-openacrs" level=2 {download}>Powiązane OpenACRs</HeaderWithAnchor>
  <ul>
    {#each $evaluation["related_openacrs"] as related}
      {#if related.url}
        <li><a href="{related.url}" target="_blank">{related.url} ({related.type}) <span class="visuallyhidden">(Otwiera nowe okno lub kartę)</span></a></li>
      {/if}
    {/each}
  </ul>
{/if}
