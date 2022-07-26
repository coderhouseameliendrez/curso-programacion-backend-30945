const nodemailer = require('nodemailer');
const TEST_MAIL = 'mark69@ethereal.email';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: 'Equ8rJfnYxNFsFvpzq'
    }
});
//const producto = {
//    name: 'Heladera',
//    precio: 100
//}

//const HTML = `Se compro el producto ${producto.name} a $${producto.precio}`

const mailOptions = {
    from: 'Servidor de node.js',
    to: TEST_MAIL,
    subject: 'Correo de test desde node',
    html:'<h1 style="color:green">Contenido desde <span style="color:blue">Node</span></h1>'
}

sendEmail()

async function sendEmail() {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
    } catch (error) {
        console.log(error);
    }
}