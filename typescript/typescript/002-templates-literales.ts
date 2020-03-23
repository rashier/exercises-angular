(function(){

	function getEdad(){
		return 100 + 200 + 300;
	}
	const nombre = 'Ferney';
	const apellido = 'Benavides';
	const edad = 36;
	
	// const salida = nombre + apellido + edad;
	
	// Sin template literales
	// const salida = nombre + " " + apellido + " (Edad:" + edad + ")";

	// Con templeate literales
	const salida = `${nombre} ${apellido} ( ${getEdad()} )`;
	// Ferney Benavides (Edad: 36)


	console.log(salida)

})();