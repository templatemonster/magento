<h3>Konfiguracja strony</h3>
<p>W celu stworzenia szablonu wyglądającego dokładnie tak samo jak nasze Live Demo, musisz skonfigurować strony sklepu w określony sposób. Zapewniamy wszystkie pliki z kodem źródłowym stron. Trzeba dodać je do panelu administratora Magento zgodnie z instrukcjami poniżej, korzystając z tabeli ustawień. Tabela ustawień znajduje się na stronie <strong>Technical details</strong>, na stronie podglądu szablonu. Plik dokumentacji zawiera link do tej strony:</p>
<ul class="files_structure">
	<li class="folder"><i class="fa fa-folder-open"></i> <strong>Documentation</strong>
		<ul>
			<li class="file"><i class="fa fa-file"></i> documentation.html</li>
		</ul>
	</li>
</ul>			
<p>Główna strona szablonu zostanie zmieniona w największym stopniu. Zawiera ona zazwyczaj następujące elementy: banery, slider, galerie, itp.</p>
<div class="alert alert-warning"><span>Zalecamy wyłączenie edytora WYSIWYG. Aby to zrobić, z górnego menu administratora należy wybrać  <strong>System &gt; Configuration</strong>. Otwórz sekcję "<strong>Content Management</strong>" i w oknie <strong>WYSIWYG Options</strong> ustaw opcję z "<strong>Enable WYSIWYG Editor</strong>" na "<strong>Disabled Completely</strong>".</span></br>
<figure class="img-polaroid"><img src="img/magento/pages-setting-1.jpg" alt="" /></figure></div>
<p class="alert alert-warning"><span>W przypadku, gdy już dokonałeś zmian w kodzie strony i chciałbyś dodać nasz kod bez wpływu na Twoje zmiany, zalecamy skontaktowanie się z profesjonalnym technikiem lub przygotowanie kopii zapasowej przed wprowadzeniem zmian.</span></p>
<ol class="index-list">
	<li>Z górnego menu wybierz <strong>CMS > Pages</strong>. Tutaj możesz znaleźć wszystkie strony sklepu. <strong>Home page</strong>, <strong>About Us</strong> oraz <strong>Customer Service</strong> powinny być już dostępne, więc nie trzeba ich dodawać. Wystarczy tylko zaktualizować strony HTML i zawartość XML. Otwórz każdy z nich w celu uzyskania dostępu do zawartości.<figure class="img-polaroid"><img src="img/magento/pages-setting-2.jpg" alt="" /></figure></li>
	<li>Otwórz stronę i wybierz zakładkę <strong>Content</strong>. Zawiera ona kod HTML strony. Możesz uzyskać kod strony HTML z odpowiedniego pliku źródłowego. Możesz zobaczyć listę plików źródłowych zawartych w sekcji "Ustawienia szablonu" na Twojej stronie podglądu szablonu. Skopiuj kod z pliku źródłowego i wklej go do pola <strong>content</strong>.<figure class="img-polaroid"><img src="img/magento/pages-setting-3.jpg" alt="" /></figure></li>
	<li>Kiedy skończysz z kodem HTML, przejdź do zakładki <strong>"Design"</strong>. Zawiera ona kod strony XML. XML pozwala na dodawanie statycznych bloków Magento i widgety na stronę. XML powinny być skopiowane w ten sam sposób jak HTML z pliku źródłowego. Skopiuj kod XML do obszaru "<strong>Layout Update XML</strong>".<figure class="img-polaroid"><img src="img/magento/pages-setting-4.jpg" alt="" /></figure></li>
	<li>Nie zapomnij wybrać prawidłowej opcji "<strong>Layout</strong>".</li>
	<li>W przypadku jeżeli zajdzie potrzeba dodania nowej strony, kliknij przycisk <strong>"Add New Page"</strong> w prawym górnym rogu.</li>
</ol>

<p>W przypadku jakichkolwiek trudności, prosimy sprawdzić szczegółowy tutorial <a target="_blank" href="/help/magento-how-to-install-sample-content-pages-manually.html">Jak ręcznie skonfigurować strony</a>.</p>		