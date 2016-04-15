<h3>Importación de los Datos de Muestra</h3>
<p>paquete de la plantilla de Magento contiene el archivo de datos de muestra (<strong>dump.sql</strong> o <strong>dump.gz</strong>). Este archivo se encuentra en la carpeta <strong>/sources/sample_data</strong> de su plantilla. Se le permite cargar datos de la muestra, por lo que su sitio web se ve exactamente igual que nuestra plantilla de demostración.</p>
<p class="alert alert-danger"><span>No importe <strong>dump.sql.gz</strong> si ya tiene los datos en su sitio web. Mediante la importación de <strong>dump.sql.gz</strong> todos los productos serán borrados de su tienda. Si no desea instalar datos de ejemplo, utilice la base de datos limpia durante la instalación de Magento. Omita el paso de instalación de datos de la muestra. </span></p>	
<p>Con el fin de instalar el archivo dump, siga los siguientes pasos:</p>
<ol class="index-list">
	<li>Inicie sesión en phpMyAdmin y seleccione la base de datos que va a utilizar para Magento Commerce (Fue creado por usted con la ayuda de los pasos que se indican anteriormente). <figure class="img-polaroid"><img src="img/magento/import-dump-1.jpg" alt="" /></figure></li>
	<li>Vaya a la pestaña <strong>"Importar" ("Import")</strong> y haga clic en el botón <strong> "Navegar" ("Browse")</strong>. <figure class="img-polaroid"><img src="img/magento/import-dump-2.jpg" alt="" /></figure></li>
	<li>Encuentre la carpeta <strong>"/sources/sample_data"</strong> de la plantilla y seleccione el archivo <strong>dump.sql.gz.</strong>. Haga click en <strong>"IR" ("GO")</strong>. <figure class="img-polaroid"><img src="img/magento/import-dump-3.jpg" alt="" /></figure> El proceso de importación puede tardar unos minutos.</li>
</ol>