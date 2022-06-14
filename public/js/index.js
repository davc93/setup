console.log('Primer log');
function intermedia(){

    return new Promise((resolve,reject)=>{

        console.log('funcion intermedia');
        resolve();
    })
}

function pegar(peleador){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(!peleador){
                reject('No hay peleador en la peticion')
            }
            console.log('Pegar jab');
            resolve(peleador);
        },4000);

    })
}

function nombre(peleador){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log(`El peleador es ${peleador}`);

            resolve();
        },2000);

    })
}

async function asincrona(peleador){

    const res = await pegar(peleador);
    
    await nombre(res);
    await intermedia();

}

asincrona('Diego');

asincrona('Andres');


// pegar('Diego')
//     .then((nombre))
//     .catch((err)=>{
//         console.error(err);
//     })