import { Controller } from "@nestjs/common";

@Controller()
export class CustomerController {
    get() {
        return 'Obter';
    }

    post() {
        return 'Criar';
    }

    put() {
        return 'Atualizar';
    }

    delete() {
        return 'Remover';
    }
}