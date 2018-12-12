
export class Adresse {

    id?: number;
    adresseLigne1:string;
    adresseLigne2: string;
    ville: string;
    codePostal: string;
    pays: string;

    constructor(adresse1: string, adresse2: string, ville: string, codePostal: string, pays: string){
        this.adresseLigne1 = adresse1;
        this.adresseLigne2 = adresse2;
        this.ville = ville;
        this.codePostal = codePostal;
        this.pays = pays;
    }
}