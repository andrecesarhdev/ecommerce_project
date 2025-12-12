import leia = require("readline-sync");

export function main() {

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
        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");

                keyPress()
                break;
            case 2:
                console.log("\n\nListar Produtos\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar Produto por id\n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar Dados do Produto\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                
                keyPress()
                break;
        }

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
main();