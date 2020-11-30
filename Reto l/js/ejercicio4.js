        
const div    = document.getElementById('div');
const divMes = document.getElementById('mes');

const meses = () => {

    let mes = Math.floor(Math.random() * (12 - 1 + 1) + 1 )

    console.log(mes);

    const meses30 = [4,6,9,11];
    const meses31 = [1,3,5,7,8,10,12];


    ( meses31.includes( mes ) )
        ? console.log( 'Mes con 31 días' )
        : ( meses30.includes( mes ) )
            ? console.log( 'Mes con 30 días' )
            : console.log( 'Mes con 29 días' );


    divMes.innerHTML = mes;
    
    ( meses31.includes( mes ) )
    ? div.innerHTML = 'Mes con 31 días'
    : ( meses30.includes( mes ) )
        ? div.innerHTML = 'Mes con 30 días'
        : div.innerHTML = 'Mes con 29 días';

}