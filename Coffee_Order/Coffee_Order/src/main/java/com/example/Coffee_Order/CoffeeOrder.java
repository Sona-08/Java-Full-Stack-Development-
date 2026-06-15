package com.example.Coffee_Order;

public class CoffeeOrder {
    private static long counter = 1;

    private long id;
    private String customerName;
    private String coffeeType;


    public long getId() {
        return id;
    }

    public void setId(long id ){
        this.id=id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCoffeeType() {
        return coffeeType;
    }

    public void setCoffeeType(String coffeeType) {
        this.coffeeType = coffeeType;
    }
}
