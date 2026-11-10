import { ElementoObra } from './ElementoObra.js';
import db from '../database/database.js';

export class ProjetoBIM {
    
    adicionarElemento(id, nome, disciplina, x, y, z) {
        const novoElemento = new ElementoObra(id, nome, disciplina, x, y, z);

        const stmt = db.prepare(`
            INSERT INTO elementos (id, nome, disciplina, x, y, z) 
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        stmt.run(
            novoElemento.id, 
            novoElemento.nome, 
            novoElemento.disciplina, 
            novoElemento.coordenadas.x, 
            novoElemento.coordenadas.y, 
            novoElemento.coordenadas.z
        );

        return novoElemento;
    }

    obterTodosElementos() {
        const stmt = db.prepare('SELECT * FROM elementos');
        const linhas = stmt.all();

        return linhas.map(row => ({
            id: row.id,
            nome: row.nome,
            disciplina: row.disciplina,
            coordenadas: { x: row.x, y: row.y, z: row.z }
        }));
    }

    // 👉 NOVO: Método para apagar do banco SQLite pelo ID
    removerElemento(id) {
        const stmt = db.prepare('DELETE FROM elementos WHERE id = ?');
        const resultado = stmt.run(id);
        
        // Retorna true se conseguiu apagar pelo menos 1 linha
        return resultado.changes > 0;
    }

    detectarConflitos() {
        const elementos = this.obterTodosElementos();
        let conflitos = [];
        
        for (let i = 0; i < elementos.length; i++) {
            for (let j = i + 1; j < elementos.length; j++) {
                const el1 = elementos[i];
                const el2 = elementos[j];

                if (
                    el1.coordenadas.x === el2.coordenadas.x &&
                    el1.coordenadas.y === el2.coordenadas.y &&
                    el1.coordenadas.z === el2.coordenadas.z &&
                    el1.disciplina !== el2.disciplina
                ) {
                    conflitos.push({
                        mensagem: `⚠️ CONFLITO CRÍTICO: ${el1.nome} (${el1.disciplina}) cruza com ${el2.nome} (${el2.disciplina})`,
                        ponto: el1.coordenadas
                    });
                }
            }
        }
        return conflitos;
    }
}

export const meuProjeto = new ProjetoBIM();