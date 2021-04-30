const template = require('./template');


module.exports = (req, res) => {
    //console.log(req.query);

    const paramns = req.method === 'GET' ? req.query : req.body;
    const idade = parseInt(paramns.idade, 10);
    const anos = parseInt(paramns.anos, 10);
    const idadeCalculada = idade+anos;
    let nome = req.query.nome;
    if(!nome || nome === ''){
        nome = 'anônimo';
    }
    let status;
    let html;
    if(!Number.isNaN(idadeCalculada)){
        status = 200;
        html = template(
        'Calculando a sua idade', `
        <div>
            <p>Olá ${nome}!</p>
            <p>Sua idade calculada com base nas informações:</p>
            <p>Sua idade daqui a <strong>${anos}</strong> anos é: <strong>${idadeCalculada}<strong></p>
        </div>
        `);
    }else{

        status = 400;
        html = template('Erro ao calcular Idade',`<p>Não foi possível calcular a sua idade</p>`);
    }
    
    res.status(status).send(html);
}