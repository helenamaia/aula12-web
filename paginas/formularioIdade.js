const template = require('./template');


module.exports = (req, res) => {
    const method = req.query.method === 'post' ? 'post' : 'get';
    const html = template(
        'Calcule a sua Idade', `
    <form action="/calcularIdade" method="${method}">
        <div>
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome">
            </div>    
        <div>
                <label for="idade">Sua idade Atual</label>
            <input type="number" name="idade" id="idade">
        </div>
        <div>
            <label for="anos">Daqui a quantos anos?</label>
            <input type="number" name="anos" id="anos">
        </div>
        <div>
            <button type="submit">Calcular</button>
        </div>
    </form>
    `);
    res.status(200).send(html)
}