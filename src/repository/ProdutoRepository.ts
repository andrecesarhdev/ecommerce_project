// importa a classe Produto, que representa o modelo dos produtos.
import { Produto } from "../model/Produto";

// Importa a interface InterfaceProdutoRepository, que define o contrato que essa classe deve seguir (os métodos obrigatórios)
import { InterfaceProdutoRepository } from "./InterfaceProdutoRepository";


 // ProdutoRepository é uma classe responsável da persistência dos dados (armazenamento).
// implements InterfaceProdutoRepository Obriga essa classe a ter todos os métodos definidos na interface (cadastrar, listar, buscar, atualizar, deletar).
export class ProdutoRepository implements InterfaceProdutoRepository {

    // produtos é um array privado. É aqui que todos os produtos cadastrados ficam guardados como se fosse um banco de dados temporario da aplicação
    private produtos: Produto[] = [];

    // Adiciona um produto se o ID não existir
    cadastrar(produto: Produto): void {
        // some() verifica se já existe um produto com o mesmo ID
        const existe = this.produtos.some(p => p.id === produto.id);
        // Se existir um produto ele retorna erro
        if (existe) {
            throw new Error(`Já existe um produto com o id ${produto.id}`);
        }
        // Se nao existir ele Adiciona produto no array
        this.produtos.push(produto);
    }

    // Retorna uma cópia da lista de produtos
    listar(): Produto[] {
        // Retorna uma cópia do array de produtos. O operador [...] (spread) impede que alguém modifique o array original acidentalmente.
        return [...this.produtos]
    }

    // Retorna produto pelo ID ou null
    buscarPorId(id: number): Produto | null {
        // find() retorna o produto se encontrado.  
        const encontrado = this.produtos.find(p => p.id === id);
        // Se retornar undefined, o operador ?? transforma em null.
        return encontrado ?? null;
        // Resultado final: retorna um Produto ou null caso não exista.
    }

    // Substitui o produto existente por outro
    atualizar(produto: Produto): void {
        // Procura o índice do produto com o mesmo ID.
        const index = this.produtos.findIndex(p => p.id === produto.id);
        // Se não encontrar:
        if (index === -1) {
            throw new Error(`Produto com id ${produto.id} não encontrado.`);
        }
        // Se encontrar: Substitui o produto antigo pelo novo:
        this.produtos[index] = produto;
    }

    // Remove o produto indicado pelo ID
    deletar(id: number): void {
        // Encontra o índice pelo ID.
        const index = this.produtos.findIndex(p => p.id === id);
        // Se não achar lança erro.
        if (index === -1) {
            throw new Error(`Produto com id ${id} não encontrado.`);
        }
        // Se achar → remove 1 elemento na posição encontrada.
        this.produtos.splice(index, 1);
    }

}