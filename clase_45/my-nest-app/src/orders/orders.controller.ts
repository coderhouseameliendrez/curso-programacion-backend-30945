import { Controller, Body, Post, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '../interface/order.interface';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller('orders')
export class OrdersController {

    constructor(private orderService: OrdersService){}

    @Get()
    async findAll() : Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get('/:id')
    async findById() : Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        this.orderService.create(createOrderDto);
    }
}
