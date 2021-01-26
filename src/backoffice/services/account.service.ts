import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.model';

@Injectable()
export class AccountService {
    constructor(@InjectModel('User') private readonly model: Model<User>) {
       
    }

    create(data: User): Promisse<User> {
        const user = new this.model(data);
        return user.save();
    }
}