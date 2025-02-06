'use strict';

// URL DE LA API

const apiUrl = 'https://api.fxratesapi.com/latest?api_key=fxr_live_bf8a7aa24bd7339e9b0b22f44da06dcfc81e';

// FUNCION PARA OBTENER EL VALOR DEL USD/COP

function getExchangeRate(){

    fetch(apiUrl)

        .then(response => response.json())
        .then(data => {

            //OBTENER EL VALOR USD/COP
            const rate= data.rates.COP;

            // FORMATEAR EL VALOR CON PESOS COLOMBIANOS
            
            const formattedRate = rate.toLocaleString('es-CO',{

                style: 'currency',

                currency: 'COP',

                minimumFractionDigits: 2,

            });

            //MOSTRAR EL VALOR EN EL HTML
            document.getElementById('exchange-rate').innerText=`1 USD = ${formattedRate} COP`;
        })

        .catch(error => {


            console.error('Error al obtener la tasa de cambio:',error);
            document.getElementById('exchange-rate').innerText = ' No se pudo obtener el valor.';
        });

        

       
}

//FUNCIO PARA OBTENER EL VALOR DE 1 USD A EUROS

function getExchangeRateEuro(){

    fetch(apiUrl)

        .then(response => response.json())
        .then(data => {

            //OBTENER EL VALOR USD/COP
            const rate= data.rates.EUR;

            // FORMATEAR EL VALOR CON PESOS COLOMBIANOS
            
            const formattedRateEur = rate.toLocaleString('es-ES',{

                style: 'currency',

                currency: 'EUR',

                minimumFractionDigits: 2,

            });

            //MOSTRAR EL VALOR EN EL HTML
            document.getElementById('exchange-rateEur').innerText=`1 USD = ${formattedRateEur} EUR`;
        })

        .catch(error => {


            console.error('Error al obtener la tasa de cambio:',error);
            document.getElementById('exchange-rateEur').innerText = ' No se pudo obtener el valor.';
        });

        

       
}

function getExchangeRateYen(){

    fetch(apiUrl)

        .then(response => response.json())
        .then(data => {

            //OBTENER EL VALOR USD/COP
            const rate= data.rates.JPY;

            // FORMATEAR EL VALOR CON PESOS COLOMBIANOS
            
            const formattedRateJpy = rate.toLocaleString('ja-JP',{

                style: 'currency',

                currency: 'JPY',

                minimumFractionDigits: 2,

            });

            //MOSTRAR EL VALOR EN EL HTML
            document.getElementById('exchange-rateJpy').innerText=`1 USD = ${formattedRateJpy} JPY`;
        })

        .catch(error => {


            console.error('Error al obtener la tasa de cambio:',error);
            document.getElementById('exchange-rateJpy').innerText = ' No se pudo obtener el valor.';
        });

        

       
}

// LLAMAR A LA FUNCION PARA OBTENER EL VALOR CUANDO CARGUE LA PAGINA
setInterval(getExchangeRateYen,5000);
getExchangeRateEuro();
getExchangeRate();
