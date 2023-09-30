export function printMultiplicationTable (base: number, limit: number = 10){
    if (limit<=0){
        throw new Error('El límite debe ser positivo');
    }
    for(let i = 1;i<=limit;i++){
        console.log(base, '*', i, '=', base*i);
   }
}