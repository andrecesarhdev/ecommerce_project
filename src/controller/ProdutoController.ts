// readline-sync: usado para ler inputs do usuário.
import leia = require("readline-sync");

// Produto: modelo base (classe abstrata).
import { Produto } from "../model/Produto";

// ProdutoRepository: onde os produtos são armazenados/gerenciados.
import { ProdutoRepository } from "../repository/ProdutoRepository";

// ProdutoGeral: classe concreta de produto que pode ser instanciada.
import { ProdutoGeral } from "../model/ProdutoGeral";


/*VISÃO GERAL DA CONTROLLER
A controller:
recebe a opção escolhida no menu (executar(opcao))
chama o método correto (cadastrar, listar, etc)
usa o repositório para acessar os dados
usa o readline-sync para conversar com o usuário no terminal
Ela é o "meio de campo" entre o usuário → lógica → dados.*/
export class ProdutoController {

  // Cria um repositório interno.Toda vez que cadastrar/listar/atualizar/deletar, usará esse objeto.
  private repository: ProdutoRepository = new ProdutoRepository();

    // Roteia opções do menu
  public executar(opcao: number): void {
    // Recebe a opção do menu e direciona para o método correspondente.
    switch (opcao) {
      case 1:
        this.cadastrar();
        break;
      case 2:
        this.listar();
        break;
      case 3:
        this.buscarPorId();
        break;
      case 4:
        this.atualizar();
        break;
      case 5:
        this.deletar();
        break;
      default:
        console.log("\nOpção inválida!\n");
    }
  }

  // Lê dados, cria produto e salva
  private cadastrar(): void {
    // Lê os dados do produto pelo terminal.
    const id = leia.questionInt("ID: ");
    const nome = leia.question("Nome: ");
    const valor = leia.questionFloat("Valor: ");
    const quantidade = leia.questionInt("Quantidade: ");
    // Cria um objeto ProdutoGeral.
    const produto = new ProdutoGeral(id, nome, valor, quantidade);
    // Envia para repository.cadastrar() → que salva no array
    this.repository.cadastrar(produto);
    // Exibe confirmação.
    console.log("\nProduto cadastrado!\n");
  }

  // Mostra todos os produtos
  private listar(): void {
    // Pega todos os produtos do repositório
    const produtos = this.repository.listar();
    console.log("\n=== Produtos Cadastrados ===");
    // Percorre com forEach()
    // Exibe cada produto na tela
    produtos.forEach(p => {
      console.log(`ID: ${p.id} | Nome: ${p.nome} | Valor: ${p.valor} | Qtde: ${p.quantidade}`);
    });
    console.log("============================\n");
  }

  // Mostra produto específico
  private buscarPorId(): void {
    // Lê o ID
    const id = leia.questionInt("Informe o ID: ");
    // enta buscar no repositório
    const produto = this.repository.buscarPorId(id);
    // Se achou mostra:
    if (produto) {
      console.log(`\nID: ${produto.id} | Nome: ${produto.nome} | Valor: ${produto.valor} | Qtde: ${produto.quantidade}\n`);
      // Se não achou → exibe mensagem
    } else {
      console.log("\nProduto não encontrado!\n");
    }
  }

  // Atualiza parcialmente um produto
  private atualizar(): void {
    // Lê o ID.
    const id = leia.questionInt("ID do produto a atualizar: ");
    // Busca o produto existente
    const existente = this.repository.buscarPorId(id);
    // Se não existir → encerra.
    if (!existente) {
      console.log(`\nProduto com ID ${id} não encontrado.\n`);
      return;
    }
    // Se existir: Pergunta ao usuário os novos valores, mostrando os valores antigos entre parênteses.
    const nome = leia.question(`Novo nome (${existente.nome}): `).trim();
    const valorStr = leia.question(`Novo valor (${existente.valor}): `).replace(",", ".").trim();
    const qtdStr = leia.question(`Nova quantidade (${existente.quantidade}): `).trim();

    // Se o usuário deixar o campo vazio, mantém o valor antigo:
    const nomeFinal = nome.length ? nome : existente.nome;
    const valorFinal = valorStr.length ? parseFloat(valorStr) : existente.valor;
    const qtdFinal = qtdStr.length ? parseInt(qtdStr) : existente.quantidade;

    // Cria um novo produto atualizado eu criei um novo objeto e substitui o antigo no repositório.
    const produtoAtualizado = new ProdutoGeral(id, nomeFinal, valorFinal, qtdFinal);
    this.repository.atualizar(produtoAtualizado);
    console.log("\nProduto atualizado!\n");
  }

  // Remove um produto com confirmação
  private deletar(): void {
    // Verifica se o produto existe.
    const id = leia.questionInt("ID a deletar: ");
    const existe = this.repository.buscarPorId(id);
    // Se não existir sai.
    if (!existe) {
      console.log(`\nProduto com ID ${id} não encontrado.\n`);
      return;
    }

    // Se o usuário confirmar com “S”:
    const confirma = leia.question("Confirma exclusão? (S/N): ").toUpperCase();
    // chama o repositório → remove o produto
    // exibe mensagem
    if (confirma === "S") {
      this.repository.deletar(id);
      console.log("\nProduto deletado!\n");

      // Caso contrário: exibe "Exclusão cancelada"
    } else {
      console.log("\nExclusão cancelada.\n");
    }
  }
}
