import { Adresse } from "./Adresse";

export class User {
    id? : number;
    prenom : string;
    nom : string;
    pseudo : string;
    password : string;
    civilite : number;
    description: string;
    mail: string;
    adresses : Adresse[];
    photo : string;
}