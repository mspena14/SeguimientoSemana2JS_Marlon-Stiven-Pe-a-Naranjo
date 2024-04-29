/* Funcionalidades Principales:
1. Registrar una nueva mascota (nombre, especie, raza, edad (calcular la edad de acuerdo a la
fecha de nacimiento), peso, estado (estable, critico), nombre propietario, documento del
dueño, teléfono de contacto, correo del propietario,).
2. Ver la lista de todas las mascotas registradas, en dicho array.
3. Ver una lista de todos los dueños
4. Buscar una mascota por el nombre
5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño
6. Actualizar la información de una mascota existente.
7. Eliminar una mascota del array.
8. Crear un menú que me permita controlar cada una de estas acciones */

// Creamos nuestra base de 10 mascotas
let mascotas = [
    {
        nombre: "luna",
        especie: "perro",
        raza: "criollo",
        edad: calcularAñosMascota(new Date("2014/06/15")),
        peso: "20",
        estado: "estable",
        nombrePropietario: "marlon",
        documentoPropietario: "1007405332",
        telefonoPropietario: "3194746457",
        correoPropietario: "marlono1naranjo@gmail.com"
    },
    {
        nombre: "titi",
        especie: "gato",
        raza: "criollo",
        edad: calcularAñosMascota(new Date("2020/05/10")),
        peso: "6",
        estado: "estable",
        nombrePropietario: "marlon",
        documentoPropietario: "1007405332",
        telefonoPropietario: "3194746457",
        correoPropietario: "marlono1naranjo@gmail.com"
    },
    {
        nombre: "whiskers",
        especie: "gato",
        raza: "siamés",
        edad: calcularAñosMascota(new Date("2019/07/03")),
        peso: "6",
        estado: "critico",
        nombrePropietario: "carolina",
        documentoPropietario: "1023654789",
        telefonoPropietario: "3178965478",
        correoPropietario: "carolina.mendoza@example.com"
    },
    {
        nombre: "max",
        especie: "perro",
        raza: "labrador",
        edad: calcularAñosMascota(new Date("2016/08/15")),
        peso: "25",
        estado: "estable",
        nombrePropietario: "roberto",
        documentoPropietario: "1098741236",
        telefonoPropietario: "3125874963",
        correoPropietario: "roberto.gomez@example.com"
    },
    {
        nombre: "fluffy",
        especie: "conejo",
        raza: "holandés",
        edad: calcularAñosMascota(new Date("2020/02/20")),
        peso: "2",
        estado: "estable",
        nombrePropietario: "andres",
        documentoPropietario: "1036985472",
        telefonoPropietario: "3189652147",
        correoPropietario: "andres.rodriguez@example.com"
    },
    {
        nombre: "mittens",
        especie: "gato",
        raza: "angora",
        edad: calcularAñosMascota(new Date("2017/11/12")),
        peso: "7",
        estado: "critico",
        nombrePropietario: "laura",
        documentoPropietario: "1052147896",
        telefonoPropietario: "3178964521",
        correoPropietario: "laura.martinez@example.com"
    },
    {
        nombre: "buddy",
        especie: "perro",
        raza: "bulldog",
        edad: calcularAñosMascota(new Date("2015/03/25")),
        peso: "22",
        estado: "estable",
        nombrePropietario: "diego",
        documentoPropietario: "1078963214",
        telefonoPropietario: "3136985472",
        correoPropietario: "diego.perez@example.com"
    },
    {
        nombre: "nibbles",
        especie: "conejo",
        raza: "mini lop",
        edad: calcularAñosMascota(new Date("2018/06/08")),
        peso: "1.5",
        estado: "estable",
        nombrePropietario: "andres",
        documentoPropietario: "1036985472",
        telefonoPropietario: "3189652147",
        correoPropietario: "andres.rodriguez@example.com"
    },
    {
        nombre: "toby",
        especie: "perro",
        raza: "poodle",
        edad: calcularAñosMascota(new Date("2019/04/30")),
        peso: "15",
        estado: "critico",
        nombrePropietario: "Maria",
        documentoPropietario: "1025478963",
        telefonoPropietario: "3169852478",
        correoPropietario: "maria.fernandez@example.com"
    },
    {
        nombre: "snowball",
        especie: "conejo",
        raza: "rex",
        edad: calcularAñosMascota(new Date("2016/10/20")),
        peso: "2.5",
        estado: "estable",
        nombrePropietario: "andres",
        documentoPropietario: "1036985472",
        telefonoPropietario: "3189652147",
        correoPropietario: "andres.rodriguez@example.com"
    }
]

//Array para almacenar las mascotas con 10 mascotas ya regstradas
console.log(mascotas) //

// Función para solicitar los datos de la nueva mascota o la acualización de los datos
function solicitarDatosMascotas(opcion) {
    if (opcion === 1) {
        let nombre = String(prompt("Ingrese el nombre de la mascota")).toLowerCase()
        console.log(nombre)
        let especie = String(prompt("Ingrese la especie de la mascota")).toLowerCase()
        let raza = String(prompt("Ingrese la raza de la mascota")).toLowerCase()
        let edad = calcularAñosMascota(new Date(prompt("Ingrese la fecha de nacimiento de la mascota", "YYYY/MM/DD")))
        let peso = String(prompt("Ingrese el peso de la mascota en kilogramos")).toLowerCase()
        let estado = String(prompt("Ingrese el estado de la mascota (Estable o critico)")).toLowerCase()
        let nombrePropietario = String(prompt("Ingrese el nombre del propietario de la mascota")).toLowerCase()
        let documentoPropietario = String(prompt("Ingrese el documento del propietario de la mascota")).toLowerCase()
        let telefonoPropietario = String(prompt("Ingrese el telefono del propietario de la mascota")).toLowerCase()
        let correoPropietario = String(prompt("Ingrese el correo del propietario de la mascota")).toLowerCase()

        registrarMascota(nombre, especie, raza, edad, peso, estado, nombrePropietario, documentoPropietario, telefonoPropietario, correoPropietario)
    } else {
        let nombre = String(prompt("Ingrese el nuevo nombre de la mascota")).toLowerCase()
        console.log(nombre)
        let especie = String(prompt("Ingrese la nueva especie de la mascota")).toLowerCase()
        let raza = String(prompt("Ingrese la nueva raza de la mascota")).toLowerCase()
        let edad = calcularAñosMascota(new Date(prompt("Ingrese la nueva fecha de nacimiento de la mascota", "YYYY/MM/DD")))
        let peso = String(prompt("Ingrese el nuevo peso de la mascota en kilogramos")).toLowerCase()
        let estado = String(prompt("Ingrese el nuevo estado de la mascota (Estable o critico)")).toLowerCase()
        let nombrePropietario = String(prompt("Ingrese el nuevo nombre del propietario de la mascota")).toLowerCase()
        let documentoPropietario = String(prompt("Ingrese el nuevo documento del propietario de la mascota")).toLowerCase()
        let telefonoPropietario = String(prompt("Ingrese el nuevo telefono del propietario de la mascota")).toLowerCase()
        let correoPropietario = String(prompt("Ingrese el nuevo correo del propietario de la mascota")).toLowerCase()

        let informacionActualizada = {
            nombre: nombre,
            especie: especie,
            raza: raza,
            edad: edad,
            peso: peso,
            estado: estado,
            nombrePropietario: nombrePropietario,
            documentoPropietario: documentoPropietario,
            telefonoPropietario: telefonoPropietario,
            correoPropietario: correoPropietario
        }
        return informacionActualizada
    }
}

// Función que se agrega la información de la nueva mascota al array llamada por la función que solicita los datos.
function registrarMascota(nombre, especie, raza, edad, peso, estado, nombrePropietario, documentoPropietario, telefonoPropietario, correoPropietario) {
    mascotas.push({
        nombre: nombre,
        especie: especie,
        raza: raza,
        edad: edad,
        peso: peso,
        estado: estado,
        nombrePropietario: nombrePropietario,
        documentoPropietario: documentoPropietario,
        telefonoPropietario: telefonoPropietario,
        correoPropietario: correoPropietario
    })
}

// Función para ver la lista de todas las mascotas registradas
function verListaMascotas() {
    console.log("Mostrando lista...")
    mascotas.forEach((mascota, index) => {
        console.log(`
        Mascota  ${(index + 1)}

Nombre: ${estiloCapitalizate(mascota.nombre)}
Especie: ${estiloCapitalizate(mascota.especie)}
Raza: ${estiloCapitalizate(mascota.raza)}
Edad: ${mascota.edad}
Peso: ${mascota.peso}
Estado: ${estiloCapitalizate(mascota.estado)}
Nombre del Propietario: ${estiloCapitalizate(mascota.nombrePropietario)}
Documento del Propietario: ${mascota.documentoPropietario}
Teléfono del Propietario: ${mascota.telefonoPropietario}
Correo del Propietario: ${mascota.correoPropietario}
<---------------------------------->`)
    })
}

// Función para ver la lista de todos los dueños sin repetir nombres de dueños
function verListaDueños() {
    let dueños = mascotas.map(mascota => mascota.nombrePropietario)
    let dueñosSinRepetir = []
    for (let i = 0; i < dueños.length; i++) {
        if (!dueñosSinRepetir.includes(dueños[i])) {
            dueñosSinRepetir.push(dueños[i])
        }
    }
    console.log("----------------- LIsta de Dueños----------------")
    dueñosSinRepetir.forEach((dueño, index) => {
        console.log(`${index + 1}. ${estiloCapitalizate(dueño)}`)
    })
}

// Función para buscar una mascota por el nombre
function buscarMascotaPorNombre() {
    let mascotaABuscar = String(prompt("Ingresa el nombre de la mascota que deseas buscar").toLowerCase())
    let buscarMascota = mascotas.find(mascota => mascota.nombre === mascotaABuscar)
    console.log(typeof (buscarMascota))
    if (mascotas.find(mascota => mascota.nombre === mascotaABuscar)) {

        console.log(`
Mascota encontrada:

Nombre: ${estiloCapitalizate(buscarMascota.nombre)}
Especie: ${estiloCapitalizate(buscarMascota.especie)}
Raza: ${estiloCapitalizate(buscarMascota.raza)}
Edad: ${buscarMascota.edad}
Peso: ${buscarMascota.peso}
Estado: ${estiloCapitalizate(buscarMascota.estado)}
Nombre del Propietario: ${estiloCapitalizate(buscarMascota.nombrePropietario)}
Documento del Propietario: ${buscarMascota.documentoPropietario}
Teléfono del Propietario: ${buscarMascota.telefonoPropietario}
Correo del Propietario: ${buscarMascota.correoPropietario}
        `)
    } else {
        console.log("Mascota no encontrada.")
    }
}

// Función para filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
function mostrarMascotasPorDueño() {
    let documentoPropietario = String(prompt("Ingresa el documento del dueño de las mascotas que deseas buscar").toLowerCase())
    let mascotasDelDueño = mascotas.filter(mascota => mascota.documentoPropietario === documentoPropietario)
    console.log(typeof (mascotasDelDueño))
    if (mascotas.filter(mascota => mascota.documentoPropietario === documentoPropietario)) {
        console.log(`Mascotas de ${estiloCapitalizate(mascotasDelDueño[0].nombrePropietario)}:`)
        mascotasDelDueño.forEach(mascota => {
            console.log(estiloCapitalizate(mascota.nombre))
        })
    } else {
        console.log("No se encontraron mascotas para este dueño.")
    }
}

// Función para actualizar la información de una mascota existente
function actualizarInformacionMascota(nombre) {
    let index = mascotas.findIndex(mascota => mascota.nombre === nombre)
    if (index !== -1) {
        let nuevaInformacion = solicitarDatosMascotas()
        mascotas[index] = { ...mascotas[index], ...nuevaInformacion }
        console.log("Información de la mascota actualizada correctamente.")
    } else {
        console.log("Mascota no encontrada.")
    }
}

// Función para eliminar una mascota del array
function eliminarMascota(nombre) {
    let indiceMascota = mascotas.findIndex(mascota => mascota.nombre === nombre)

    if (indiceMascota !== -1) {
        mascotas.splice(indiceMascota, 1);
        console.log("Mascota eliminada correctamente.")
    } else {
        console.log("No se encontró la mascota.")
    }
}

// Función para darle estilo capitalizate a lo que se imprime en pantalla
function estiloCapitalizate(texto) {
    return (texto).charAt(0).toUpperCase() + (texto).slice(1)
}

//función para pasar las fechas de nacimiento a años
function calcularAñosMascota(fechaNacimientoMascota) {
    let fechaActual = new Date()
    let restaFechas = fechaActual - fechaNacimientoMascota
    let años = restaFechas / (1000 * 60 * 60 * 24 * 365.25) //Se multiplica por 365.25 para que se tenga en cuenta los años biciestos
    let añosRedondeados = Math.floor(años)

    return añosRedondeados
}
function menu() {
    let opcion
    do {
        opcion = parseInt(prompt(`
Por favor digita el número de la opción que deseas realizar del siguiente menú:
        -------------------------------Menú-------------------------------
        [1] Registrar una nueva mascota
        [2] Ver la lista de todas las mascotas registradas
        [3] Ver una lista de todos los dueños
        [4] Buscar una mascota por el nombre
        [5] Filtrar y mostrar todas las mascotas pertenecientes
         a un mismo dueño
        [6] Actualizar la información de una mascota existente
        [7] Eliminar una mascota de la lista
        [8] Salir
        `))

        switch (opcion) {
            case 1:
                /* Llamamos a la función solicitarDatosMascota para pedir al usuario que ingrese los datos de la mascota 
                 y llamar a la función registrarMascota para agregarla */
                solicitarDatosMascotas(opcion)
                break
            case 2:
                // Opcion para ver la lista de todas las mascotas registradas
                verListaMascotas()
                break
            case 3:
                // Opcion para mostrar la lista de los dueños de mascotas sin repetirlos
                verListaDueños()
                break
            case 4:
                // Opcion para buscar una mascota por el nombre
                buscarMascotaPorNombre()
                break
            case 5:
                // Opcion para filtrar las mascotas de un mismo dueño buscando por el número de documento
                mostrarMascotasPorDueño()
                break
            case 6:
                let nombre = String(prompt("Ingresa el nombre de la mascota que deseas actualizar").toLowerCase())
                actualizarInformacionMascota(nombre)
                // Actualizar la información de una mascota existente
                // Pedir al usuario que ingrese el nombre de la mascota
                break
            case 7:
                // Eliminar una mascota de la lista
                let nombreMascotaEliminar = prompt("Ingrese el nombre de la mascota que desea eliminar:")
                eliminarMascota(nombreMascotaEliminar)
                break
            case 8:
                // Opcion para salir del sistema
                alert("Saliendo del sistema...")
                break
            default:
                console.log("Opción no válida. Por favor, seleccione una opción válida.")
        }
    } while (opcion !== 8)
}

// Llamada a la función principal para iniciar el sistema
if ((confirm("¿Quieres iniciar el programa?")) === false) {
    alert("Saliendo del sistema...")
} else {
    alert("Bienvenido al sistema de gestión de mascotas.")
    menu()
} 
