const sgMail = require('@sendgrid/mail')

const sendgridApiKey = "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"

sgMail.setApiKey(sendgridApiKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'apoorvbhati01@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'apoorvbhati01@gmail.com',
        subject: `Deleting ${name}'s profile`,
        text: `Goodbye, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}