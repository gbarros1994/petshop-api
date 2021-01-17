import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Customer } from "../models/customer.model";

// localhost:3000/customers
@Controller('v1/customers')
export class CustomerController {
    @Get()
    get() {
        return 'Obter';
    }

    @Get(':document')
    getById(@Param('document') document) {
        return 'Obter ' + document;
    }

    @Post()
    post(@Body() body: Customer) {
        return body.name;
    }

    @Put(':document')
    put(@Param('document')  document, @Body() body) {
        return {
            customer: document,
            data: body
        };
    }

    @Delete(':document')
    delete(@Param(':document') document) {
        return 'Remover';
    }
}