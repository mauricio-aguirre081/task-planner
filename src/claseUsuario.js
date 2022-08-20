class Usuario  {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`El nombre completo del usuario es:  ${this.nombre}  ${this.apellido}` );
    }
    addMascotas(nuevaMascota){
        mascotas.push(nuevaMascota);
        console.log(mascotas);
    }
    countMascotas(){
        console.log(mascotas.length);
    }
    addBook(nombre, autor) {
        libros.push({titulo: nombre, autor: autor});
        console.log(libros);
    }
    getBooksNames(){
      	let booksNames = libros.map(function (bookName){
          return bookName.titulo
        });
      console.log(booksNames)
		}
};

let Juan = new Usuario (nombre= 'Juan', apellido= 'Perez', libros=[{titulo: 'Hamlet', autor: 'William Shakespeare'}, {titulo: 'Odisea', autor: 'Homero'}, {titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes'}], mascotas= ['loro', 'gato', 'hamster']);

let Pedro = new Usuario (nombre= 'Pedro', apellido= 'Pascal', libros=[{titulo: 'Historia de dos ciudades', autor: 'Charles Dickens'}, {titulo: 'El principito', autor: 'Antoine de Saint-Exupéry'}, {titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien'}], mascotas= ['perro', 'gato', 'ratón']);

/*Juan.getFullName();
Juan.addMascotas('perra');
Juan.countMascotas();
Juan.addBook('Orgullo y Prejuicio', 'Jane Austen');
Juan.getBooksNames();*/

Pedro.getFullName();
Pedro.addMascotas('pez');
Pedro.countMascotas();
Pedro.addBook('1984', 'George Orwell');
Pedro.getBooksNames();