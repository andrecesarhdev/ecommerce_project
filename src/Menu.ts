import leia = require("readline-sync");
import { ProdutoController } from "./controller/ProdutoController";

export function main() {
    const controller = new ProdutoController();
    let opcao: number;

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Bem vindo a nossa loja               ");
        console.log("                    FreeSurf Store                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Buscar Produto por id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");


        if (opcao == 6) {
            console.log("\nFreeSurf Store agradece sua visita, volte sempre!");
            sobre();
            process.exit(0);
        }
        controller.executar(opcao);

        keyPress();

    }
}

export function sobre(): void {
    console.log("*****************************************************");
    console.log("\nSistema desenvolvido por: André César Henrique 🌊🏄‍♀️");
    console.log("\nhttps://github.com/andrecesarhdev");
    console.log("*****************************************************");

}

function keyPress(): void {
    console.log("\nPRessione enter para continuar...");
    leia.prompt();
}

if (require.main === module) {
  main();
}