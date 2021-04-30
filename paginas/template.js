module.exports = (titulo, conteudo) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/login">Login</a>
        </li>
        
        <li>
            <a href="/formularioIdade">Calcular[GET]</a>
        </li>
        <li>
            <a href="/formularioIdade?method=post">Calcular[POST]</a>
        </li>

    </ul>
    <h1>${titulo}</h1>
    <div>${conteudo}</div>
</body>
</html>
`;