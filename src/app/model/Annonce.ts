import { Vehicule } from "./Vehicule";
import { User } from "./User";

export class Annonce {
    id? : number
    user : User
    vehicule : Vehicule
    debut : Date
    fin : Date
}