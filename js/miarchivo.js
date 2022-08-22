debugger

/* let num = parseInt(prompt('Ingresa un número:'))
for (let i=0; i<=num; i++){
    if ((i / 5) == 1){
        continue
    }
    console.log(i)
} */

let club = prompt('Indica un equipo de fùtbol')
club.toLowerCase()
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
}
/* if (club===true){
    alert('Su equipo es '+club)
} */

