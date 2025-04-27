<style>
	h1:focus {
	outline: none; /* Uzasadnienie: ten element koncentruje się na trasie, aby poprawić nawigację dla użytkowników czytników ekranu; Zakładając, że kontur fokusu może zmylić niektórych użytkowników i że ten element nie jest "interfejsem użytkownika obsługiwanym za pomocą klawiatury" (jak w  https://www.w3.org/WAI/WCAG21/quickref/#focus-visible), nie wymaga widocznego fokusa  */
	}
</style>

<h1>
  <slot />
</h1>
