
// ------------------------------ Desafío Complementario 1 -------------------

/* let club = prompt('Indica un equipo de fùtbol')
club.toLowerCase()
debugger
while (club!='esc'){
    switch(club){
        case 'boca juniors':
            alert('Su equipo es: '+club)
            break
        case 'river plate':
            alert('Su equipo es: '+club)
            break
        case 'racing club':
            alert('Su equipo es: '+club)
            break
        case 'san lorenzo':
            alert('Su equipo es: '+club)
            break
        case 'Independiente':
            alert('Su equipo es: '+club)
            break
        default:
            alert('Lo siento. Debe ser uno de los 5 equipos más populares de Argentina. (Escriba "esc" sin las comillas para finalizar)')
    }
    club = prompt('Ingresa otro equipo')
} */
// ---------------- Fin desafío complementario 1 -------------------



//---------------- Desafío complementario 2 --------------------------
const consulta = 1000
let precio = 0
class Paciente {
    constructor(nombre, apellido, dni, condicion) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = parseInt(dni)
        this.condicion = condicion.toUpperCase()
    }
    costo(){
        if (this.condicion==='PARTICULAR'){
            precio = 2000 + consulta
        } else if (this.condicion==='OSDE'){
            precio = 1000 + consulta
        } else { alert('Particular u osde')
            }
    }
    mostrar(){
        if((this.condicion==='PARTICULAR') || (this.condicion==='OSDE')){
           alert('Los datos del paciente son: ' + this.nombre +' '+ this.apellido +' '+ this.dni +' '+ this.condicion+' '+'Su costo es: '+precio) 
        }
    }
}

const pacientes=[]

function costoPaciente (){
    debugger
    let nombre = prompt('Ingrese su nombre:')
    let apellido = prompt('Ingrese su apellido:')
    let dni = parseInt(prompt('Ingrese su dni:'))
    let condicion = prompt('Ingrese si es particular o indique su obra social:')
    const pacie = {nombre: nombre, apellido: apellido, dni: dni, condicion: condicion}
    pacientes.push(pacie)
    const costo = new Paciente(nombre,apellido,dni,condicion)
    costo.costo()
    costo.mostrar()
    console.table(pacientes)
}

//---------------- Fin desafío complementario 2-----------------------