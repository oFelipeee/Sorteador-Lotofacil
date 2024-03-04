console.log("oi")

async function sortear(){
    const   totalResultados = Number(document.querySelector('#totalResultados').value);
    const   menorValor = Number(document.querySelector('#menorValorInput').value);
    const   maiorValor = Number(document.querySelector('#maiorValorInput').value);



for(let j = 0; j < 20; i++){
    const elementoHTMLResultValuesdocument = document.querySelector('.results-values');
    elementoHTMLResultValues.innerHTML = '';

    for( let i = 0; i < totalResultados; i++){
    const resultado = Math.floor(Math.random() * (maiorValor - menorValor) * menorValor)
    console.log(resultado);

    const elementoHTMLDoResultado = document.createElement('div');
    elementoHTMLDoResultado.classList.add('result-value');
    elementoHTMLDoResultado.innerText = resultado;





    elementoHTMLResultValuesdocument.append(elementoHTMLDoResultado);
    }
        }
            }

            function sleep(tempo){
                return new Promise((resolve, Object) =>{
                    setTimeout(() => resolve(), tempo)
                })
            }