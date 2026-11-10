export class ElementoObra {
    constructor(id, nome, disciplina, x, y, z) {
        if (!id || !nome || !disciplina) {
            throw new Error("ID, nome e disciplina do elemento são obrigatórios!");
        }
        
        const posX = Number(x);
        const posY = Number(y);
        const posZ = Number(z);

        if (isNaN(posX) || isNaN(posY) || isNaN(posZ)) {
            throw new Error("As coordenadas espaciais (X, Y, Z) devem ser numéricas válidas!");
        }

        this.id = id;
        this.nome = nome.trim();
        this.disciplina = disciplina.trim().toUpperCase();
        this.coordenadas = { x: posX, y: posY, z: posZ };
    }
}