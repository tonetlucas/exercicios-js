var agr = new Date();
var diaSem = agr.getDay()
/*
 0 = Domingo
 1 = Segunda
 2 = Terça
 3 = Quarta
 4 = Quinta
 5 = Sexta
 7 = Sábado
*/
//console.log(diaSem);

    switch(diaSem){
        case 0: 
        console.log('Domingo');
        break;

        case 1: 
        console.log('Segunda');
        break

        case 2: 
        console.log('Terça');
        break

        case 3: 
        console.log('Quarta');
        break;

        case 5: 
        console.log('Quinta');
        break;

        case 6: 
        console.log('Sexta');
        break;

        case 7: 
        console.log('Sábado');
        break;
    }