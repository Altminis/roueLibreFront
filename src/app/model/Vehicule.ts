import { Etat } from "./Etat";
import { Adresse } from "./Adresse";
import { Categorie } from "./Categorie";
import { Photo } from "./Photo";


export class Vehicule {
    id?: number
    intitule: string
    marque: string
    userId: number
    etat?: Etat
    categorie?: Categorie
    isAvailable?: boolean
    adresse?: Adresse
    description: string
    photoName: string
}