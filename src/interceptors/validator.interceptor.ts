import { CallHandler, ExecutionContext, HttpException, HttpStatus, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { Contract } from "src/backoffice/contracts/contract";
import { Result } from "src/backoffice/models/result.model";

export class ValidatorInterceptor implements NestInterceptor {
    constructor(public contract: Contract) {
        
    }
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate(body);

        if (!valid) {
            throw new HttpException(
                new Result(
                    'Ops, algo saiu errado',
                    false,
                    null,
                    this.contract.errors)
                    , HttpStatus.BAD_REQUEST);
        } else {
            throw new Error("");
        }
        throw new Error("");
    }
    
}