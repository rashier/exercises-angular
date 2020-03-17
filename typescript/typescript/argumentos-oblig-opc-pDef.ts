(function(){
	function activar(	quien		: string, 							//argumento o parametro obligatorio
										momento?: string,								//argumento o parametro opcional
										objeto	: string = 'batiseñal'	//argumento o parametro por defecto
										){
		if ( momento ){
			console.log(`${quien} activo la ${objeto} ${momento}.`)
		} else {
			console.log(`${quien} activo la ${objeto}.`)
		}
	}
	
	// llamada a la funcion sin enviar el argumento objeto
	activar('Gordon', 'tarde');
	// llamada a la funcion enviando el argumento objeto como "luz"
	activar('Gordon', 'tarde', 'luz');

})();