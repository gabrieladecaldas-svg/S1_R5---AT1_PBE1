
const express = require("express");

const app = express();

app.use(express.json());

// Rota POST /mensagem
app.post("/mensagem", (req, res) => {
    const { nome, idade, time } = req.body;

    // Verificar se os dados foram informados
    if (!nome || idade === undefined || !time) {
        return res.status(400).json({
            erro: "Informe nome, idade e time favorito."
        });
    }

    // Verificar se a idade é numérica
    if (typeof idade !== "number" || idade < 0) {
        return res.status(400).json({
            erro: "A idade deve ser um número válido."
        });
    }

    // Criar a mensagem
    const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

    return res.status(200).json({
        mensagem: mensagem
    });
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000!");
});
