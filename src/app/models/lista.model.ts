import { ListaItem } from './lista-items.model';
export class Lista {

    id: number;
    titutlo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {

        this.titutlo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();

    }
}
