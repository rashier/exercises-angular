function imprimirConsola( construstutorClase: Function ) {
	console.log( construstutorClase );
}

@imprimirConsola

export class Xmen {
	constructor (
		public nombre	: string,
		public clave	: string
	){}

	imprimir(){
		console.log(`${this.nombre} - ${this.clave}`)
	}
}