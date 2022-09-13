import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { Observable } from 'rxjs';
import { Quotes } from '../models/user.interface';
import { QuotesService } from '../service/user.service';

@Controller('quotes')
export class QuotesController {

    constructor(private quotesService: QuotesService){}

    @Post()
    add(@Body() quotes: Quotes): Observable<Quotes>{
        return this.quotesService.add(quotes);
    }

    @Get()
    findAll(): Observable<Quotes[]>{
        return this.quotesService.findAll();

    }
     
}
