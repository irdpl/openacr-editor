<script>
  import { evaluation } from "../../stores/evaluation.js";
  import { getEvaluatedChapterCriteriaComponents, getChapterCriteriaComponents } from "../../utils/getEvaluatedItems.js";

  export let className = "";

  $: items = getEvaluatedChapterCriteriaComponents($evaluation);
  $: totalCriteria = getChapterCriteriaComponents($evaluation);
</script>

<p class={className}>
  Raportowano w dniu
  <strong>{items.length}</strong>
  z
  <strong>{totalCriteria.length}</strong>
  kryteriów ogółem.
</p>
