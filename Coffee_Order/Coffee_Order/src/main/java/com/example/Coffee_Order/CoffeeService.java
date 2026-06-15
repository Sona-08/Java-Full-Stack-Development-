package com.example.Coffee_Order;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CoffeeService {
    private final List<CoffeeOrder> orders = new ArrayList<>();
    private int next=1;

    public CoffeeOrder orderCoffee(CoffeeOrder order) {
        order.setId(next++);
        orders.add(order);
        return order;
    }

    public List<CoffeeOrder> getOrders() {
        return orders;
    }

}
