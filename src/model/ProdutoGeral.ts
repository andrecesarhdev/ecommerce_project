import { Produto } from "./Produto";

export class ProdutoGeral extends Produto {
    constructor(id: number, nome: string, valor: number, quantidade: number) {
        super(id, nome, valor, quantidade);
    }

    
    public override visualizar(): void {
        super.visualizar(); 
    }
}