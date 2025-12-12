export abstract class Produto{
    private _id: number;
    private _nome: string;
    private _valor: number;
    private _quantidade: number;

    constructor(id: number, nome: string, valor: number, quantidade: number){
        this._id = id;
        this._nome = nome;
        this._valor = valor;
        this._quantidade = quantidade;
    }

    
    public get id() {
        return this._id
    }

    public set id(id:number) {
        this._id = id;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get valor() {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    public get quantidade() {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public visualizar(): void {
        console.log(`ID: ${this._id} | nome: ${this._nome} | Valor: ${this._valor.toFixed(2)} | Estoque: ${this._quantidade}`)
    }
}