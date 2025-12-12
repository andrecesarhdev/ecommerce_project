// Biblioteca que permite ler informações digitadas pelo usuário no terminal de forma síncrona, ou seja, a execução espera o usuário digitar.
import leia = require("readline-sync");

// Importa a classe responsável por coordenar as operações de produto (cadastrar, listar, atualizar, deletar, etc).
import { ProdutoController } from "./controller/ProdutoController";

// Exporta a função main, que é o ponto de entrada do meu sistema.
export function main() {

    // Cria um objeto do controlador para poder chamar métodos como executar(opcao)
    const controller = new ProdutoController();

    // opcao vai guardar o número escolhido no menu.
    let opcao: number;

    // Loop infinito — o menu fica exibindo até o usuário escolher "Sair". Só termina quando executa o process.exit(0).
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
        // questionInt() lê um número inteiro digitado.
        opcao = leia.questionInt("");

        // Usuário escolhe 6
        if (opcao == 6) {
            // Exibe a mensagem de despedida
            console.log("\nFreeSurf Store agradece sua visita, volte sempre!");
            // Chama a função sobre() (informações de créditos)
            sobre();
            // Finaliza o programa com process.exit(0)
            process.exit(0);
        }
        /*Aqui está o coração da aplicação.
        O menu apenas lê a opção.
        Quem realiza a operação é o controller.
        O método executar deve ser responsável por:
        cadastrar produto listar produtos buscar por id atualizar apagar*/
        controller.executar(opcao);

        // O sistema só continua quando o usuário pressiona ENTER.
        keyPress();

    }
}
// Exibe informações do desenvolvedor É chamada quando o usuário sai do sistema
export function sobre(): void {
    console.log("*****************************************************");
    console.log("\nSistema desenvolvido por: André César Henrique 🌊🏄‍♀️");
    console.log("\nhttps://github.com/andrecesarhdev");
    console.log("*****************************************************");

}

// Mostra mensagem Espera ENTER usando prompt()
function keyPress(): void {
    console.log("\nPRessione enter para continuar...");
    leia.prompt();
}

// Este trecho verifica:
// Se este arquivo foi executado diretamente no terminal (node Menu.js)
// Se sim → chama main()
if (require.main === module) {
    main();
}