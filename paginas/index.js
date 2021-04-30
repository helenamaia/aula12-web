const template = require('./template');


module.exports = (req, res) => {
    const html = template(
        'Página Inicial', `
        <p>Seja Bem vindo ao nosso site</p>
    `);
    res.status(200).send(html)
}