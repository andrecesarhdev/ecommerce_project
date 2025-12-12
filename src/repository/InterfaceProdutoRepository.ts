// Importa a classe Produto, para que os métodos da interface possam usar o tipo Produto.
import {Produto} from "../model/Produto";


/* O que é uma interface?
Uma interface em TypeScript:
não tem implementação, apenas define um modelo, uma estrutura.
funciona como um contrato:
qualquer classe que implementar essa interface é obrigada a ter todos os métodos definidos nela.
Isso garante organização, padrão e evita erros durante o desenvolvimento.*/
export interface InterfaceProdutoRepository{

        // Define que deve existir um método chamado cadastrar, que: recebe um Produto não retorna nada (void)
        cadastrar(produto: Produto): void;

        // Deve retornar um array de produtos. Que foi criado na classa ProdutoRepository
        listar(): Produto[];

        // Busca um produto por ID. O retorno pode ser: um Produto encontrado ou null caso o ID não exista
        buscarPorId(id: number): Produto | null;

        // Atualiza um produto existente. Não retorna nada.
        atualizar(produto: Produto): void;

        // Remove um produto pelo ID. Não retorna nada.
         deletar(id: number): void;
}