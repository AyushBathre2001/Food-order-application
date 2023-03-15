const nodemailer = require('nodemailer')

const sendConfirmation = async (email) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ayushtherock2001@gmail.com',
            pass: process.env.PASS
        }
    })

    let info = await transporter.sendMail({
        from: "ayushtherock2001@gmail.com>",
        to: email,
        subject: "Order Confirmed",
        html: '<p>Your order has been confirmed and will be delivered to your address within 60 minutes.</p>'
    })

    console.log("Message sent: %s", info.messageId);



    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


}

module.exports = sendConfirmation