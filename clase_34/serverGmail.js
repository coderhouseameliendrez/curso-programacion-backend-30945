const nodemailer = require('nodemailer');
const TEST_MAIL = 'testcoderam@gmail.com';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: TEST_MAIL,
        type: 'OAuth2',
        clientId: 'CLIENT ID',
        clientSecret: 'SECRET CLIENT',
        refreshToken: 'REFRESH TOKEN',
        accessToken: 'ACCESS TOKEN'
    }
});


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