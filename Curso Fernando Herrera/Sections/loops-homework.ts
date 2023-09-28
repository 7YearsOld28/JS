

export let base = 10;
let limit = 50; 


//bucle for

for(let i = 1;i<=limit;i++){
     console.log(base, '*', i, '=', base*i);
}

//bucle while

let i = 1;

while(i<=limit){
     console.log(base, '*', i, '=', base*i);
     i++
}

//bucle do while

i=1

do{
     console.log(base, '*', i, '=', base*i);
     i++  
}while(i<=limit)
