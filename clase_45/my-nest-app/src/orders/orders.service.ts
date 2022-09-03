import { Injectable } from '@nestjs/common';
import { Order } from '../interface/order.interface'

@Injectable()
export class OrdersService {
    private orders: Order[] = [];

    public create(order: Order) {
        this.orders.push(order);
    }
    
    public findAll() : Order[] {
        return this.orders;
    }
}
