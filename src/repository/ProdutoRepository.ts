import { Produto } from "../model/Produto";
import { InterfaceProdutoRepository } from "./InterfaceProdutoRepository";

export class ProdutoRepository implements InterfaceProdutoRepository {
    private produtos: Produto[] = [];

    cadastrar(produto: Produto): void {
        const existe = this.produtos.some(p => p.id === produto.id);
        if (existe) {
            throw new Error(`Já existe um produto com o id ${produto.id}`);
        }
        this.produtos.push(produto);
    }
    listar(): Produto[] {
        return [...this.produtos]
    }
    buscarPorId(id: number): Produto | null {
        const encontrado = this.produtos.find(p => p.id === id);
        return encontrado ?? null;
    }
    atualizar(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.id === produto.id);
        if (index === -1) {
            throw new Error(`Produto com id ${produto.id} não encontrado.`);
        }
        this.produtos[index] = produto;
    }
    deletar(id: number): void {
        const index = this.produtos.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error(`Produto com id ${id} não encontrado.`);
        }
        this.produtos.splice(index, 1);
    }

}