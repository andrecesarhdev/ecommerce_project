// controller/ProdutoController.ts
import leia = require("readline-sync");
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { ProdutoGeral } from "../model/ProdutoGeral";

export class ProdutoController {

  private repository: ProdutoRepository = new ProdutoRepository();

  public executar(opcao: number): void {
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

  private cadastrar(): void {
    const id = leia.questionInt("ID: ");
    const nome = leia.question("Nome: ");
    const valor = leia.questionFloat("Valor: ");
    const quantidade = leia.questionInt("Quantidade: ");
    const produto = new ProdutoGeral(id, nome, valor, quantidade);
    this.repository.cadastrar(produto);
    console.log("\nProduto cadastrado!\n");
  }

  private listar(): void {
    const produtos = this.repository.listar();
    console.log("\n=== Produtos Cadastrados ===");
    produtos.forEach(p => {
      console.log(`ID: ${p.id} | Nome: ${p.nome} | Valor: ${p.valor} | Qtde: ${p.quantidade}`);
    });
    console.log("============================\n");
  }

  private buscarPorId(): void {
    const id = leia.questionInt("Informe o ID: ");
    const produto = this.repository.buscarPorId(id);
    if (produto) {
      console.log(`\nID: ${produto.id} | Nome: ${produto.nome} | Valor: ${produto.valor} | Qtde: ${produto.quantidade}\n`);
    } else {
      console.log("\nProduto não encontrado!\n");
    }
  }

  private atualizar(): void {
    const id = leia.questionInt("ID do produto a atualizar: ");
    const existente = this.repository.buscarPorId(id);
    if (!existente) {
      console.log(`\nProduto com ID ${id} não encontrado.\n`);
      return;
    }

    const nome = leia.question(`Novo nome (${existente.nome}): `).trim();
    const valorStr = leia.question(`Novo valor (${existente.valor}): `).replace(",", ".").trim();
    const qtdStr = leia.question(`Nova quantidade (${existente.quantidade}): `).trim();

    const nomeFinal = nome.length ? nome : existente.nome;
    const valorFinal = valorStr.length ? parseFloat(valorStr) : existente.valor;
    const qtdFinal = qtdStr.length ? parseInt(qtdStr) : existente.quantidade;

    const produtoAtualizado = new ProdutoGeral(id, nomeFinal, valorFinal, qtdFinal);
    this.repository.atualizar(produtoAtualizado);
    console.log("\nProduto atualizado!\n");
  }

  private deletar(): void {
    const id = leia.questionInt("ID a deletar: ");
    const existe = this.repository.buscarPorId(id);
    if (!existe) {
      console.log(`\nProduto com ID ${id} não encontrado.\n`);
      return;
    }
    const confirma = leia.question("Confirma exclusão? (S/N): ").toUpperCase();
    if (confirma === "S") {
      this.repository.deletar(id);
      console.log("\nProduto deletado!\n");
    } else {
      console.log("\nExclusão cancelada.\n");
    }
  }
}
