<script>
	import { onMount } from "svelte";
	import { useLocation } from "svelte-navigator";
	import Header from "../components/Header.svelte";
	import DTWithAnchor from "../components/DTWithAnchor.svelte";
	import { currentPage } from "../stores/currentPage.js";
	import { honourFragmentIdLinks } from "../utils/honourFragmentIdLinks.js";

	const location = useLocation();

	onMount(() => {
	currentPage.update(currentPage => "Glossary");

	honourFragmentIdLinks($location);
	});
</script>

<svelte:head>
	<title>Słownik| Edytor OpenACR | LepszyWeb.pl</title>
</svelte:head>

<Header>Słowniczek</Header>

<p>
	Słownik pojęć związanych z OpenACR.
</p>

<dl>
	<DTWithAnchor id="amerykanska-ustawa-o-niepelnosprawnych">Amerykańska Ustawa o Niepełnosprawnych z 1990 r. (ADA)</DTWithAnchor>
	<dd>
		Ustawa o Niepełnosprawnych (<span lang="en">Americans with Disabilities Act - ADA</span>) z roku 1990, która zakazuje dyskryminacji ze względu na niepełnosprawność i zapewnia osobom z niepełnosprawnościami wszechstronną ochronę praw w dziedzinach związanych z zatrudnieniem, usługami na szczeblu rządów stanowych i lokalnych, udogodnień publicznych, transportu i telekomunikacji.
	</dd>

	<DTWithAnchor id="aplikacja">Aplikacja</DTWithAnchor>
	<dd>
		Oprogramowanie przeznaczone do wykonywania określonego zadania lub zadań albo do pomocy użytkownikowi w ich wykonywaniu.
	</dd>

	<DTWithAnchor id="audiodeskrypcja">Audiodeskrypcja</DTWithAnchor>
	<dd>
		Narracja dodana do ścieżki dźwiękowej w celu opisania ważnych szczegółów wizualnych, których nie można zrozumieć z samej głównej ścieżki dźwiękowej. Audiodeskrypcja to sposób informowania osób niewidomych lub słabowidzących o treściach wizualnych niezbędnych do zrozumienia. Audiodeskrypcja wideo dostarcza informacji o akcjach, postaciach, zmianach scen, tekście na ekranie i innych treściach wizualnych. Audiodeskrypcja uzupełnia zwykłą ścieżkę dźwiękową programu. Audiodeskrypcja jest zwykle dodawana podczas istniejących przerw w dialogu. Audiodeskrypcja jest również nazywana „opisem wideo” i „narracją opisową”.
	</dd>
	
	
	<DTWithAnchor id="bariera">Bariera</DTWithAnchor>
	<dd>Obejmuje wszystko, co fizyczne, architektoniczne, technologiczne lub związane z postawami, wszystko, co opiera się na informacjach lub komunikatach, lub wszystko, co jest wynikiem polityki lub praktyki, która utrudnia pełne i równe uczestnictwo w społeczeństwie osobom z niepełnosprawnościami, w tym z niepełnosprawnością fizyczną, psychiczną, intelektualną, poznawczą, w zakresie uczenia się, komunikacji lub sensoryczną, lub ograniczeniem funkcjonalnym.</dd>


	<DTWithAnchor id="dobrowolny-szablon-dostępnosci-produktu">Dobrowolny szablon dostępności produktu (VPAT™)</DTWithAnchor>
	<dd>Najczęściej używany format ACR, który jest utrzymywany przez Information Technology Industry Council. Jest to statyczny dokument opisujący, w jaki sposób oprogramowanie, sprzęt, zawartość elektroniczna i dokumentacja pomocnicza spełniają wymagania dotyczące dostępności. VPAT-y są często wymagane w zamówieniach publicznych, aby pomóc kupującym zrozumieć, jak dostępny może być produkt i pomóc w odkryciu niedociągnięć.</dd>



	<DTWithAnchor id="dokument">Dokument</DTWithAnchor>
	<dd>Logicznie odrębny zbiór treści (takich jak plik, zestaw plików lub strumieniowe media), który: działa jako pojedyncza jednostka, a nie kolekcja; nie jest częścią oprogramowania; i nie zawiera własnego oprogramowania do pobierania i prezentowania treści użytkownikom. Przykłady dokumentów obejmują, ale nie ograniczają się do listów, wiadomości e-mail, arkuszy kalkulacyjnych, prezentacji, podcastów, obrazów i filmów.</dd>


	
	



	<DTWithAnchor id="dostepnosc">Dostępność</DTWithAnchor>
	<dd>Miara użyteczności strony internetowej dla osób z jedną lub wieloma niepełnosprawnościami.</dd>

	<DTWithAnchor id="accommodations">Dostosowanie</DTWithAnchor>
	<dd>Modyfikacja produktu lub usługi, aby dana osoba mogła wykonywać funkcje zawodowe wydajnie i bezpiecznie. Jest to często konieczne, jeśli produkt nie spełnia standardu dostępności. Dostosowania po fakcie są zawsze droższe niż zbudowanie dostępnego rozwiązania.</dd>

	<DTWithAnchor id="doswiadczenie-klienta-projektowanie-zorientowane-na-czlowieka">Doświadczenie klienta (CX) / Projektowanie zorientowane na człowieka (HCD)</DTWithAnchor>
	<dd>Całość reakcji poznawczych, afektywnych, sensorycznych i behawioralnych na wszystkich etapach procesu. Efektywne CX i HCD obejmują również osoby niepełnosprawne.</dd>

	<DTWithAnchor id="doswiadczenie-zyciowe">Doświadczenie życiowe</DTWithAnchor>
	<dd>Najcenniejsze jest testowanie z udziałem osób, które same doświadczyły niepełnosprawności.</dd>


	<DTWithAnchor id="europejskie-zharmonizowane-normy-dostępnosci-en-301-549">Europejskie zharmonizowane normy dostępności (EN 301 549)</DTWithAnchor>
	<dd>To ewoluuje, aby stać się globalnym standardem dla polityki rządowej. To ewoluujący standard, który mniej więcej podąża za wytycznymi WCAG i je rozszerza.</dd>



	<DTWithAnchor id="falszywe-wyniki-pozytywne">Fałszywe wyniki pozytywne</DTWithAnchor>
	<dd>Błąd w raportowaniu danych, w którym wynik testu błędnie wskazuje na istnienie usterki.</dd>

	<DTWithAnchor id="localization">Lokalizacja</DTWithAnchor>
	<dd>Dostosowanie lub adaptacja produktu krajowego lub międzynarodowego na rynek lokalny.</dd>

	<DTWithAnchor id="lagodna-degradacja">Łagodna degradacja</DTWithAnchor>
	<dd>Gdy witryna wykorzystuje nową technologię i po jej wyłączeniu treść pozostaje atrakcyjna dla użytkownika.</dd>


	<DTWithAnchor id="medyczny-model-niepełnosprawnosci">Medyczny model niepełnosprawności</DTWithAnchor>
	<dd>Rozumienie niepełnosprawności oparte na biomedycznym postrzeganiu niepełnosprawności. Ten model łączy diagnozę niepełnosprawności z fizycznym ciałem jednostki. Model zakłada, że ​​ta niepełnosprawność może obniżyć jakość życia jednostki, a celem jest, aby dzięki interwencji medycznej ta niepełnosprawność została zmniejszona lub skorygowana.</dd>


	<DTWithAnchor id="model-dojrzalosci-dostepnosci">Model dojrzałości dostępności</DTWithAnchor>
	<dd>Ocena zrozumienia i zdolności organizacji do zajęcia się dostępnością. Często obejmuje to zapewnienie, że organizacja obejmuje osoby z niepełnosprawnościami w składzie personelu (w tym na stanowiskach kierowniczych).</dd>


	<DTWithAnchor id="narzedzia-autorskie">Narzędzie autorskie</DTWithAnchor>
	<dd>Oprogramowanie lub zbiór komponentów oprogramowania, z którego autorzy mogą korzystać, indywidualnie lub grupowo, w celu tworzenia lub modyfikowania treści przeznaczonych do użytku innych osób, w tym innych autorów.</dd>


	<DTWithAnchor id="narzedzia-programistyczne-ide">Narzędzia programistyczne (IDE)</DTWithAnchor>
	<dd>Oprogramowanie, którego podstawową funkcją jest rozwój innego oprogramowania. Narzędzia programowe zwykle występują w formie zintegrowanego środowiska programistycznego (IDE) i są zestawem powiązanych produktów i narzędzi. Przykłady IDE obejmują Microsoft® Visual Studio®, Apple® Xcode® i Eclipse Foundation Eclipse®.</dd>


	<DTWithAnchor id="niepelnosprawnosc">Niepełnosprawność</DTWithAnchor>
	<dd>Jakiekolwiek upośledzenie, w tym upośledzenie fizyczne, psychiczne, intelektualne, poznawcze, w zakresie uczenia się, komunikacji lub sensoryczne — lub ograniczenie funkcjonalne — niezależnie od tego, czy ma charakter trwały, tymczasowy czy epizodyczny, wyraźny czy nie, które w interakcji z barierą utrudnia osobie pełne i równe uczestnictwo w społeczeństwie.  </dd>

	<DTWithAnchor id="odkrywalnosc">Odkrywalność</DTWithAnchor>
	<dd>Możliwość znalezienia dowolnej funkcji w kontekście, w którym jest potrzebna.</dd>

	<DTWithAnchor id="oprogramowanie">Oprogramowanie</DTWithAnchor>
	<dd>Programy, procedury, zasady i powiązane dane oraz dokumentacja, które kierują użytkowaniem i działaniem ICT oraz instruują je, aby wykonywały określone zadanie lub funkcję. Oprogramowanie obejmuje, ale nie ogranicza się do aplikacji, oprogramowania niebędącego oprogramowaniem internetowym i oprogramowania platformowego.</dd>
	
	



	<DTWithAnchor id="oprogramowanie-jako-usluga-saas">Oprogramowanie jako usługa (SaaS)</DTWithAnchor>
	<dd>Model licencjonowania i dostarczania oprogramowania, w którym oprogramowanie jest licencjonowane na zasadzie subskrypcji i hostowane centralnie</dd>

	<DTWithAnchor id="oprogramowanie-open-source-oss">Oprogramowanie Open Source (OSS)</DTWithAnchor>
	<dd>Oprogramowanie, które jest udostępniane bezpłatnie, z możliwością modyfikacji i redystrybucji. Produkty obejmują pozwolenie na korzystanie z kodu źródłowego, dokumentów projektowych lub treści produktu.</dd>

	<DTWithAnchor id="oswiadczenie-o-dostepnosci">Oświadczenie o dostępności</DTWithAnchor>
	<dd>Pisemne potwierdzenie dotyczące obaw organizacji i jej pracy nad większą inkluzywnością dla osób z niepełnosprawnościami. Zazwyczaj zawiera informacje o celach dostępności i wysiłkach na rzecz ich osiągnięcia. Często są tam linki do ACR, jeśli organizacja sprzedaje produkty lub usługi.</dd>

	<DTWithAnchor id="produkty-komercyjne-dostepne-od-reki">Produkty komercyjne dostępne od ręki (COTS)</DTWithAnchor>
	<dd>Oprogramowanie, które można zakupić i wdrożyć, przy niewielkich lub żadnych wymaganiach dotyczących personalizacji.</dd>

	<DTWithAnchor id="raport-zgodnosci-dostepnosci">Raport zgodności dostępności (ACR)</DTWithAnchor>
	<dd>
		Opis, w jaki sposób oferta spełni wszystkie określone w zaproszeniu do składania ofert wymagania dotyczące dostępności
		oraz metody oceny wykorzystane do potwierdzenia tych oświadczeń.
	</dd>

	<DTWithAnchor id="rzadowe-produkty-gotowe-cots">Rządowe produkty gotowe (COTS)</DTWithAnchor>
	<dd>Technologia informatyczna, która jest rozwijana i utrzymywana przez rząd</dd>

	<DTWithAnchor id="sekcja-504">Sekcja 504</DTWithAnchor>
	<dd>Sekcja 504 ustawy o rehabilitacji z 1973 r. Ustawa ta ma implikacje dla federalnej pomocy i udogodnień w miejscu pracy. Jeśli organizacja otrzymuje federalne wsparcie jakiegokolwiek rodzaju, nawet jeśli nie jest organizacją federalną ani stanową, musi przestrzegać sekcji 504.</dd>

	<DTWithAnchor id="sekcja-508">Sekcja 508</DTWithAnchor>
	<dd>Sekcja 508 ustawy o rehabilitacji została uchwalona w celu wyeliminowania barier w technologii informacyjnej, udostępnienia nowych możliwości osobom niepełnosprawnym i zachęcenia do rozwoju technologii, które pomogą osiągnąć te cele. Prawo dotyczy wszystkich agencji federalnych, gdy rozwijają, pozyskują, utrzymują lub używają technologii elektronicznej i informacyjnej. Do czasu odświeżenia sekcji 508 wymóg ten opierał się na najlepszych praktykach z 1998 r.</dd>

	<DTWithAnchor id="semantyka">Semantyka</DTWithAnchor>
	<dd>Semantyka to idea tworzenia większego znaczenia za pomocą informacji w treści cyfrowej. Ułatwia to urządzeniom zrozumienie, co każdy aspekt kodu oznacza dla użytkownika końcowego. Znaczniki HTML5 zostały zoptymalizowane, aby umożliwić programistom tworzenie bardziej semantycznych znaczników.</dd>

	<DTWithAnchor id="spoleczny-model-niepelnosprawnosci">Społeczny model niepełnosprawności</DTWithAnchor>
	<dd>Podejście do rozumienia niepełnosprawności, które identyfikuje bariery systemowe, pejoratywne postawy i wykluczenie społeczne (umyślne lub nieumyślne), które utrudniają lub uniemożliwiają osobom niepełnosprawnym funkcjonowanie.</dd>

	<DTWithAnchor id="system-zarzadzania-trescia">System zarządzania treścią (CMS)</DTWithAnchor>
	<dd>CMS to aplikacja programowa służąca do nadzorowania działania informacji w sieci. Typowe aplikacje CMS obejmują oprogramowanie takie jak WordPress, Joomla i Drupal.</dd>

	<DTWithAnchor id="szablon-dostępnosci-produktow-rzadowych-gpat">Szablon dostępności produktów rządowych (GPAT)</DTWithAnchor>
	<dd>Dziedziczny ACR, który został opracowany przez agencję rządową. Obecnie nie jest utrzymywany.</dd>

	<DTWithAnchor id="technologia-informacyjno-komunikacyjna-tik">Technologia informacyjno-komunikacyjna (TIK)</DTWithAnchor>
	<dd>ICT jest terminem rozszerzającym termin technologia informacyjna (IT). Odnosi się do gambitu technologii zaangażowanej w komunikację cyfrową.</dd>

	<DTWithAnchor id="technologie-wspomagajace">Technologie wspomagające</DTWithAnchor>
	<dd>Technologia zaprojektowana tak, aby osoby niepełnosprawne miały większe możliwości funkcjonalne dzięki systemom komputerowym. Może to być oprogramowanie lub sprzęt i często przynosi korzyści szerszemu gronu użytkowników komputerów.</dd>

	<DTWithAnchor id="testowanie-automatyczne">Testowanie automatyczne</DTWithAnchor>
	<dd>Oprogramowanie może teraz testować wiele barier dostępności. Staje się to coraz ważniejszym elementem tworzenia i utrzymywania oprogramowania. Żadne zautomatyzowane narzędzia nie mogą sprawdzić wszystkich wymagań sekcji 508, więc automatyczne testowanie jest niezbędną częścią skutecznej strategii testowania, ale samo w sobie niewystarczające.</dd>

	<DTWithAnchor id="testowanie-reczne">Testowanie ręczne</DTWithAnchor>
	<dd>Przy odrobinie przeszkolenia większość osób może wykonywać podstawowe testy, używając tylko klawiatury (bez myszy). Przy dodatkowym przeszkoleniu użytkownicy mogą uzyskać podstawowe pojęcie o tym, jak korzystać z innych technologii wspomagających. Skuteczne testowanie czytników ekranowych wymaga znacznego doświadczenia.</dd>

	<DTWithAnchor id="umiedzynarodowienie">Umiędzynarodowienie</DTWithAnchor>
	<dd>System, którego główna konstrukcja została opracowana w celu umożliwienia pracy w wielu językach i w różnych kontekstach kulturowych różnych miejsc.</dd>

	<DTWithAnchor id="uzytecznosc">Użyteczność</DTWithAnchor>
	<dd>Zasada, że ​​informacje i aplikacje powinny być nie tylko łatwo dostępne, ale także łatwe w użyciu i zrozumieniu.</dd>

	<DTWithAnchor id="wytyczne-dla-dostępnosci-tresci-internetowych-wcag">Wytyczne dla dostępności treści internetowych (WCAG) 2.0, 2.1, 2.2 i 3.</DTWithAnchor>
	<dd>WCAG 2.0 koncentruje się na zapewnieniu międzynarodowego standardu technicznego dla treści internetowych. Zawiera 12 wytycznych, które są zorganizowane według czterech zasad: Perceivable (Postrzegalne), Operable (Fukcjonalne), Understandable (Zrozumiałe) i Robust (Solidne). Każda z wytycznych ma testowalne kryteria sukcesu, które są na trzech poziomach: A, AA i AAA. Najnowszym zaleceniem jest 2.1, 2.2 jest prawie opublikowane, a 3.0 jest aktywnie rozwijane.</dd>

	<DTWithAnchor id="widzet">Widżet</DTWithAnchor>
	<dd> Widget to mała aplikacja zainstalowana i używana na stronach internetowych. Każdy widget ma różną liczbę celów. Przykładem widgetu jest mały formularz zapisu do newslettera e-mail lub funkcja czatu na żywo innej firmy.</dd>

	<DTWithAnchor id="zrewidowana-sekcja-508">Zrewidowana Sekcja 508</DTWithAnchor>
	<dd>Odświeżenie wytycznych dla USA sprawiło, że stały się one zasadniczo takie same jak WCAG 2.0 AA.</dd>
</dl>
