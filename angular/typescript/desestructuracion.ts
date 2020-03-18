(() => {
	
	const avenger = {
		nombre: 'Steve',
		clave: 	'Capitán América',
		poder:	'Droga'
	}
	
	// Asi se pueden extraer datos de un objeto y crear variables
	const { nombre, clave, poder} = avenger;

	console.log( nombre );
	console.log( clave );
	console.log( poder );
	
	// Asi funciona la extracion de datos de un objetos dentro de una funcion
	const extraer = ({ nombre, poder }: any ) => {

		console.log( nombre );
		console.log( poder );
	}
	
	extraer( avenger );
	

	// Destructuración de Arreglos
	const avengers : string[] = ['Thor', 'Ironman', 'Spiderman'];
	
	
	const [ loki, hombre, arana ] = avengers;
	// Si deseo ignorar una posición en el arreglo debo dejer en blanco el espacio
	// const [loki, , arana] <= Noten el espacion entre loki y arana

	console.log( loki );
	console.log( hombre );
	console.log( arana );

	// De esta manera desestructuramos un array en una funcion
	// Los nombres dentro de las ["es el nombre de la variable que quiero usar para ese dato"]
	const extraerArr = ( [thor, ironman,spiderman]: string[] ) => {
		
		console.log(thor);
		console.log(ironman);
		console.log(spiderman);
		
	}

	extraerArr( avengers );

})();