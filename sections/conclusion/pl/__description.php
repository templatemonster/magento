<h2 class="item7"><i class="icon-question-sign"></i> Podsumowanie</h2>
<p>Silnik Magento jest doskonałym rozwiązaniem dla sklepu internetowego. Domyślny pakiet silnika zawiera wszystkie moduły niezbędne do pomyślnej sprzedaży. Open source pozwala zaoferować naprawdę znakomite możliwości handlowe dla klientów. Jednakże, ze względu na dość złożoną konstrukcję silnika i zaawansowane rozwiązania, Magento wymaga dużo czasu i aspiracji. Trzeba znacznie więcej niż tego podręcznika. </p>
<p>Następujące źródła pomogą Ci stać się prawdziwym profesjonalistą Magento:</p>
<h4 id="useful_resources">Przydatne źródła</h4>
<ul class="marked-list">
    <li><a target="_blank" href="http://www.magentocommerce.com/support/magento-user-guide-book">The Official Magento User Guide</a></li>
    <li><a target="_blank" href="http://www.magentocommerce.com/wiki/">Magento Wiki</a></li>
    <li><a target="_blank" href="http://www.magentocommerce.com/knowledge-base">Knowledge Base</a></li>
    <li><a target="_blank" href="http://www.magentocommerce.com/boards/">Magento Forum</a></li>
    <li><a target="_blank" href="/help/ecommerce/magento/magento-tutorials/">Magento tutorials</a></li>
</ul>
<h4>Help and Support</h4>
<ul class="marked-list">
    <li><a href="http://chat.template-help.com/" target="_blank">Live chat</a></li>
    <li><a href="http://support.template-help.com/index.php?/Tickets/Submit"  target="_blank">Help ticket system</a></li>
</ul>


<h4>Loading data from Google servers</h4> 
Some countries have issues connecting to Google servers. This can cause issues loading Google Fonts from Google CDN. To resolve these issues please do the following:
<ol class="index-list"> 
    <li>Open <strong>app\design\frontend\default\theme***\template\page\html\head.phtml</strong></li> 
    <li>Locate the line:<pre class="prettyprint">   &lt;link href='//fonts.googleapis.com/css?family=[---your_web_font_name_here---]' rel='stylesheet' type='text/css' /></pre></li> 
    <li>Replace it with the following: <br> 
    <pre class="prettyprint">   &lt;link href='//fonts.useso.com/css?family=[---your_web_font_name_here---]' rel='stylesheet' type='text/css' /></pre></li> 
</ol>