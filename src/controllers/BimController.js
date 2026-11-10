import { meuProjeto } from '../models/ProjetoBIM.js';

export class BimController {
    
    static cadastrarElemento(req, res) {
        try {
            const { id, nome, disciplina, x, y, z } = req.body;
            const elementoCriado = meuProjeto.adicionarElemento(id, nome, disciplina, x, y, z);
            
            return res.status(201).json({
                sucesso: true,
                mensagem: "Elemento cadastrado com segurança!",
                dados: elementoCriado
            });
        } catch (erro) {
            return res.status(400).json({
                sucesso: false,
                mensagemDoErro: erro.message 
            });
        }
    }

    static listarElementos(req, res) {
        try {
            const elementos = meuProjeto.obterTodosElementos();
            
            return res.status(200).json({
                sucesso: true,
                total: elementos.length,
                dados: elementos
            });
        } catch (erro) {
            return res.status(500).json({
                sucesso: false,
                erro: "Erro interno ao buscar os elementos do projeto."
            });
        }
    }

    // 👉 NOVO: Método que lida com a requisição de exclusão
    static removerElemento(req, res) {
        try {
            const { id } = req.params;
            const foiRemovido = meuProjeto.removerElemento(id);

            if (!foiRemovido) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: `Elemento com o ID '${id}' não foi encontrado.`
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: `Elemento '${id}' removido com sucesso!`
            });
        } catch (erro) {
            return res.status(500).json({
                sucesso: false,
                erro: "Erro interno ao tentar remover o elemento."
            });
        }
    }

    static listarConflitos(req, res) {
        try {
            const conflitos = meuProjeto.detectarConflitos();
            
            return res.status(200).json({
                totalConflitos: conflitos.length,
                conflitos: conflitos
            });
        } catch (erro) {
            return res.status(500).json({
                sucesso: false,
                erro: "Erro interno ao detectar conflitos."
            });
        }
    }
}