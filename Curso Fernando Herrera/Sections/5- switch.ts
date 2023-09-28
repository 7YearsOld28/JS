


export let weekDay = 5

if (weekDay<=0){
throw new Error ('Día de la semana incorrecto');
}


switch(weekDay){

     case 1:
          console.log('Es Lunes');
          break;

     case 2:
          console.log('Es Martes');
          break;

     case 3:
          console.log('Es Miércoles');
          break;

     default:
          console.log('No es lunes, martes o miércoles')
}
