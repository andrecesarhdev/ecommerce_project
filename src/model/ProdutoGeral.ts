// Importa a classe abstrata Produto.
// Isso permite que ProdutoGeral herde todas as características de Produto.
import { Produto } from "./Produto";

// Declaração da classe filha
// ProdutoGeral é uma subclasse de Produto
export class ProdutoGeral extends Produto {
    constructor(id: number, nome: string, valor: number, quantidade: number) {
        super(id, nome, valor, quantidade);
    }

    public override visualizar(): void {
        super.visualizar();
    }
}
// ESSA CLASSE FAZ:
// Ela cria um tipo de produto padrão, totalmente funcional, baseado em Produto.
// Mesmo sem comportamento extra, ela é necessária porque a classe mãe é abstrata.