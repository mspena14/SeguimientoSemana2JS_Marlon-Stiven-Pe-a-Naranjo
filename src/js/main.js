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

let mascotas = [
    {
        nombre: "luna",
        especie: "perro",
        raza: "criollo",
        edad: new Date("2014/06/15"),
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
        edad: new Date("2020/05/10"),
        peso: "6",
        estado: "estable",
        nombrePropietario: "Marlon",
        documentoPropietario: "1007405332",
        telefonoPropietario: "3194746457",
        correoPropietario: "marlono1naranjo@gmail.com"
    },
    {
        nombre: "whiskers",
        especie: "gato",
        raza: "siamés",
        edad: new Date("2019/07/03"),
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
        edad: new Date("2016/08/15"),
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
        edad: new Date("2020/02/20"),
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
        edad: new Date("2017/11/12"),
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
        edad: new Date("2015/03/25"),
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
        edad: new Date("2018/06/08"),
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
        edad: new Date("2019/04/30"),
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
        edad: new Date("2016/10/20"),
        peso: "2.5",
        estado: "estable",
        nombrePropietario: "andres",
        documentoPropietario: "1036985472",
        telefonoPropietario: "3189652147",
        correoPropietario: "andres.rodriguez@example.com"
    }
]


console.log(mascotas) //

// Array para almacenar las mascotas
// Función para registrar una nueva mascota
function registrarMascota(nombre, especie, raza, fechaNacimiento, peso, estado, nombrePropietario, documentoPropietario, telefonoPropietario, correoPropietario) {
    mascotas.push({
        nombre: nombre,
        especie: especie,
        raza: raza,
        fechaNacimiento: fechaNacimiento,
        peso: peso,
        estado: estado,
        nombrePropietario: nombrePropietario,
        documentoPropietario: documentoPropietario,
        telefonoPropietario: telefonoPropietario,
        correoPropietario: correoPropietario
    });
}

// Función para ver la lista de todas las mascotas registradas
function verListaMascotas() {
    mascotas.forEach(mascota => {
        console.log("Nombre: " + mascota.nombre);
        console.log("Especie: " + mascota.especie);
        console.log("Raza: " + mascota.raza);
        console.log("Fecha de Nacimiento: " + mascota.fechaNacimiento);
        console.log("Peso: " + mascota.peso);
        console.log("Estado: " + mascota.estado);
        console.log("Nombre del Propietario: " + mascota.nombrePropietario);
        console.log("Documento del Propietario: " + mascota.documentoPropietario);
        console.log("Teléfono del Propietario: " + mascota.telefonoPropietario);
        console.log("Correo del Propietario: " + mascota.correoPropietario);
        console.log("--------------------");
    });
}

// Función para ver la lista de todos los dueños
function verListaDueños() {
    let dueños = mascotas.map(mascota => mascota.nombrePropietario);
    let uniqueDueños = [...new Set(dueños)];
    console.log("Lista de Dueños:");
    console.log(uniqueDueños);
}

// Función para buscar una mascota por el nombre
function buscarMascotaPorNombre(nombre) {
    let mascotaEncontrada = mascotas.find(mascota => mascota.nombre === nombre);
    if (mascotaEncontrada) {
        console.log("Mascota encontrada:");
        console.log(mascotaEncontrada);
    } else {
        console.log("Mascota no encontrada.");
    }
}

// Función para filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
function mostrarMascotasPorDueño(documentoPropietario) {
    let mascotasDelDueño = mascotas.filter(mascota => mascota.documentoPropietario === documentoPropietario);
    if (mascotasDelDueño.length > 0) {
        console.log("Mascotas del Dueño:");
        mascotasDelDueño.forEach(mascota => {
            console.log(mascota.nombre);
        });
    } else {
        console.log("No se encontraron mascotas para este dueño.");
    }
}

// Función para actualizar la información de una mascota existente
function actualizarInformacionMascota(nombre, nuevaInformacion) {
    let index = mascotas.findIndex(mascota => mascota.nombre === nombre)
    if (index !== -1) {
        mascotas[index] = { ...mascotas[index], ...nuevaInformacion }
        console.log("Información de la mascota actualizada correctamente.")
    } else {
        console.log("Mascota no encontrada.")
    }
}

// Función para eliminar una mascota del array
function eliminarMascota(nombre) {
    mascotas = mascotas.filter(mascota => mascota.nombre !== nombre)
    console.log("Mascota eliminada correctamente.")
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
    console.log(`
    Por favor digita el número de la opción que deseas realizar del siguiente menú:

    -------------------------------Menú-------------------------------
    [1] Registrar una nueva mascota
    [2] Ver la lista de todas las mascotas registradas
    [3] Ver una lista de todos los dueños
    [4] Buscar una mascota por el nombre
    [5] Filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
    [6] Actualizar la información de una mascota existente
    [7] Eliminar una mascota de la lista
    [8] Salir
    `)
}

function mostrarIndiceMascosas(mascotas) {
    mascotas.forEach((mascota, index) => {
        console.log(`Mascota ${index} - ${mascota.nombre}`)
    })

}
// Lógica para controlar las operaciones del sistema
function menu() {
    let opcion;
    do {
        mostrarMenu()
        opcion = parseInt(prompt("Ingrese el número de la opción que desea realizar:"))

        switch (opcion) {
            case 1:
                // Registrar una nueva mascota
                // Pedir al usuario que ingrese los datos de la mascota y llamar a la función registrarMascota
                break
            case 2:
                // Ver la lista de todas las mascotas registradas
                verListaMascotas()
                break
            case 3:
                // Ver una lista de todos los dueños
                verListaDueños()
                break
            case 4:
                // Buscar una mascota por el nombre
                // Pedir al usuario que ingrese el nombre de la mascota y llamar a la función buscarMascotaPorNombre
                break
            case 5:
                // Filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
                // Pedir al usuario que ingrese el documento del propietario y llamar a la función mostrarMascotasPorDueño
                break
            case 6:
                // Actualizar la información de una mascota existente
                // Pedir al usuario que ingrese el nombre de la mascota y los nuevos datos, luego llamar a la función actualizarInformacionMascota
                break
            case 7:
                // Eliminar una mascota de la lista
                
                eliminarMascota()
                break
            case 8:
                console.log("Saliendo del sistema...")
                break
            default:
                console.log("Opción no válida. Por favor, seleccione una opción válida.")
        }
    } while (opcion !== 8)
}

// Llamada a la función principal para iniciar el sistema
if ((confirm("¿Quieres iniciar el programa?")) === false) {
    console.log("Saliendo del sistema...")
} else {
    console.log("Bienvenido al sistema de gestión de mascotas.")
    menu()
} 
