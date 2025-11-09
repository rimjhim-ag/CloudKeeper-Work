package Product;

import java.util.ArrayList;

public class Product {

    private int id;
    private String name;
    private int price;



    Product(String name, int price, int id){
        try{
        if(price <0){
            throw new InvalidPriceException("Invalid Price");
        }
            this.name = name;


            this.price = price;
            this.id = id;}
        catch(Exception e){
             System.out.println(e.getMessage());

        }

    }

    @Override
    public String toString() {
        return "Product [name=" + name + ", price=" + price + ", id=" + id + "]";
    }


}


class InvalidPriceException extends Exception{
    InvalidPriceException(String message){
        super(message);
    }
}

class Main{

    public static void main(String[] args){

        ArrayList <Product> list = new ArrayList<>();


        list.add(new Product("Television", 12000, 1));
        list.add(new Product("Microwave", -10000, 2));
        list.add(new Product("Notebook", 1000, 3));

        for(Product p : list){
            System.out.println(p.toString());
        }




    }
}


