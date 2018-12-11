import { User } from "./User";
import { Etat } from "./Etat";
import { Adresse } from "./Adresse";
import { Categorie } from "./Categorie";


export class Vehicule {
    id?: number
    intitule: string
    marque: string
    loueur?: User
    etat?: Etat
    categorie?: Categorie
    isAvailable?: boolean
    adresse?: Adresse
    description: string
    photo: string
}