import Database from 'better-sqlite3';

// Isso vai criar um arquivo chamado 'database.sqlite' na raiz do seu projeto automaticamente
const db = new Database('database.sqlite');

// Criando a tabela de elementos construtivos caso ela ainda não exista
db.exec(`
    CREATE TABLE IF NOT EXISTS elementos (
        id TEXT PRIMARY KEY,
        nome TEXT NOT NULL,
        disciplina TEXT NOT NULL,
        x REAL NOT NULL,
        y REAL NOT NULL,
        z REAL NOT NULL
    )
`);

export default db;