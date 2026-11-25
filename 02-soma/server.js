const express = require("express");

const app = express();

app.use(express.json());

// Rota POST /soma
app.post("/soma", (req, res) => {
    const { numero1, numero2, numero3 } = req.body;

    // Verificar se os campos foram enviados
    if (
        numero1 === undefined ||
        numero2 === undefined ||
        numero3 === undefined
    ) {
        return res.status(400).json({
            erro: "Informe os três números."
        });
    }

    // Verificar se todos os valores são numéricos
    if (
        typeof numero1 !== "number" ||
        typeof numero2 !== "number" ||
        typeof numero3 !== "number" ||
        !Number.isFinite(numero1) ||
        !Number.isFinite(numero2) ||
        !Number.isFinite(numero3)
    ) {
        return res.status(400).json({
            erro: "Todos os campos devem conter números válidos."
        });
    }

    // Realizar a soma
    const resultado = numero1 + numero2 + numero3;

    return res.status(200).json({
        resultado: resultado
    });
});

// Iniciar o servidor
app.listen(3001, () => {
    console.log("Servidor de soma funcionando na porta 3001!");
});
