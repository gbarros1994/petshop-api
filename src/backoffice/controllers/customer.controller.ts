import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

// localhost:3000/customers
@Controller('customers')
export class CustomerController {
    @Get()
    get() {
        return 'Obter';
    }

    @Post()
    post() {
        return 'Criar';
    }

    @Put()
    put() {
        return 'Atualizar';
    }

    @Delete()
    delete() {
        return 'Remover';
    }
}