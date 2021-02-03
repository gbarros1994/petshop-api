import { Injectable } from "@nestjs/common";
import { Flunt } from "src/utils/flunt";
import { CreateCustomerDto } from "../../dtos/create-customer-dto";
import { Contract } from "../contract";

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];

    validate(model: CreateCustomerDto): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome inválido');
        flunt.isEmail(model.email, 'E-mail inválido');
        flunt.isFixedLen(model.document, 11, 'CPF inválido');

        this.errors = flunt.errors;
        return flunt.isValid();
    };
}
