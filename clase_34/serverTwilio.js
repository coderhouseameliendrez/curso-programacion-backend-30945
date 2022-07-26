const twilio = require('twilio');

const ACCOUNT_SID = 'TU ACCOUNT SID';
const AUTH_TOKEN = 'TU AUTH TOKEN'


const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

sendSms()

async function sendSms() {
    try {
        const message = await client.messages.create({
            body: 'Hola, soy un SMS desde node js',
            from: '+15087197114',
            to: 'INGRESAR TELEFONO CELULAR'
        });

        console.log(message);
    } catch (error) {
        console.log(error);
    }
    
}