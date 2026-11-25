
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

// Rota POST /login
app.post("/login", (req, res) => {
    const { usuario, senha } = req.body;

    // Verificar se os campos foram informados
    if (!usuario || !senha) {
        return res.status(400).json({
            erro: "Informe o usuário e a senha."
        });
    }

    try {
        // Ler o arquivo JSON
        const caminhoArquivo = path.join(__dirname, "usuarios.json");
        const dados = fs.readFileSync(caminhoArquivo, "utf8");
        const acesso = JSON.parse(dados);

        // Verificar usuário e senha
        if (usuario === acesso.usuario && senha === acesso.senha) {
            return res.status(200).json({
                mensagem: "Login realizado com sucesso!"
            });
        }

        // Retornar erro informando o usuário
        return res.status(401).json({
            erro: "Usuário ou senha incorretos.",
            usuario: usuario
        });

    } catch (erro) {
        return res.status(500).json({
            erro: "Erro ao ler os dados de acesso."
        });
    }
});

// Iniciar o servidor
app.listen(3002, () => {
    console.log("Servidor de login funcionando na porta 3002!");
});
