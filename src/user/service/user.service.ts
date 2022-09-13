import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { format } from 'path';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { QuotesEntity } from '../models/user.entity';
import { Quotes } from '../models/user.interface';

@Injectable()
export class QuotesService {

    constructor(
        @InjectRepository(QuotesEntity)
        private userRepository: Repository<QuotesEntity>
    ){ }

    add(quotes: Quotes): Observable<Quotes>{
        return from(this.userRepository.save(quotes));
    }

    findAll(): Observable<Quotes[]>{
        return from(this.userRepository.find());
    }
}
