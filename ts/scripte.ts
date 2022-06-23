interface Iabbigliamento {
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  }

class abbigliamento {
    private _id:number;
    private _codprod: number;
    private _collezione:string;
    private _capo:string;
    private _modello:number;
    private _quantita:number;
    private _colore:string;
    private _prezzoivaesclusa:number;
    private _prezzoivainclusa:number;
    private _disponibile:string;
    private _saldo:number;

        constructor(
            id:number,
            codprod:number,
            collezione:string,
            capo:string,
            modello:number,
            quantita:number,
            colore:string,
            prezzoivaesclusa:number,
            prezzoivainclusa:number,
            disponibile:string,
            saldo:number
        ) {
            this._id = id;
            this._codprod =codprod;
            this._collezione = collezione;
            this._capo = capo;
            this._modello = modello;
            this._quantita = quantita;
            this._colore = colore;
            this._prezzoivaesclusa = prezzoivaesclusa;
            this._prezzoivainclusa = prezzoivainclusa;
            this._disponibile = disponibile;
            this._saldo = saldo;
    }
    infoprodotto(): string {
        return `ID: ${this._id} - COD. ${this._codprod} Collezione: ${this._collezione} | ${this._capo} ${this._modello}
        Colore ${this._colore} QT. ${this._quantita} Prezzo: ${this._prezzoivaesclusa} Prezzo iva inc. ${this._prezzoivainclusa}
        Disponibilità: ${this._disponibile} Saldo ${this._saldo}`;
    }

    getSaldoCapo(): number {
        return (this._prezzoivainclusa*this._saldo)/100;
    }
    getAcquistoCapo(): number {
        return this._prezzoivainclusa - this.getSaldoCapo();
    }
} 

/* let prod = new abbigliamento (1,111,'estate','T-shirt', 123, 5, 'nero', 12.00, 14.64, 'negozio', 30);
console.log(prod.infoprodotto());
console.log('prezzo saldo '+ prod.getAcquistoCapo().toFixed(2)); */

let arrProdotti: abbigliamento[] = [];

let promise = fetch('json/Abbigliamento.json').then(response => response.json());
promise.then(prodotti => {
    prodotti.forEach((prod: Iabbigliamento) => {
    
    let obj = new abbigliamento (prod.id,prod.codprod, prod.collezione,prod.capo, prod.modello, prod.quantita, prod.colore, prod.prezzoivaesclusa,prod.prezzoivainclusa,prod.disponibile,prod.saldo);
    arrProdotti.push(obj);
    });
    stampaProdotti();
})

function stampaProdotti() {
    console.log(arrProdotti)
    arrProdotti.forEach(ele =>{
        console.log(ele.infoprodotto());
    })
}