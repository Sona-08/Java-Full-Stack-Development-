// class bookInventory{
//     void addBook(){
//         System.out.println("Adding book to inventory");
//     }
// }
// class userRegistration{
//     void registerUser(){
//         System.out.println("Registering user");
//     }
// }
// class fineCalculation{
//     void calculateFine(){
//         System.out.println("Calculating fine");
//     }
// }

// class Discount{
//     double calculate();
// }
// class Diwali extends Discount{
//     double calculate(double price){
//         return price*0.1;
//     }
// }

// class Christmas extends Discount{
//     double calculate(double price){
//         return price*0.2;
//     }
// }

// class DiscountCalculator{
//     double calculatediscount(Discount discount,double price){
//         return discount.calculate(price);
//     }
// }

// class Area{
//     double calculateArea();
// }
// class noArea extends Area{
//     double calculateArea(){
//         return 0;
//     }
// }
// class Circle extends Area{
//     double calculateArea(double radius){
//         return 3.14*radius*radius;
//     }
// }
// class line extends noArea{
//     double calculateArea(){
//         return 0;
//     }
// }

// interface Music{
//     void playmusic();
// }
// interface Call{
//     void makecall();
// }
// interface Internet{
//     void browseInternet();
// }

// class SmartPhone implements Music,Call,Internet{
//     public void playmusic(){
//         System.out.println("Playing music");
//     }
//     public void makecall(){
//         System.out.println("Making call");
//     }
//     public void browseInternet(){
//         System.out.println("Browsing internet");
//     }
// }

// class BasicPhone implements Call{
//     public void makecall(){
//         System.out.println("Making call");
//     }
// }

interface DataBase{
    void connect();
}

class MySQL implements DataBase{
    public void connect(){
        System.out.println("Connecting to MySQL database");
    }
}
class PostgreSQL implements DataBase{
    public void connect(){
        System.out.println("Connecting to PostgreSQL database");
    }
}
class DatabaseConnection{
    void connectToDatabase(DataBase database){
        database.connect();
    }
}