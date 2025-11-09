public class Car {
    String model;
    int price ;


    Car(String model , int price){
          this.model = model;
          this.price = price;
    }

    Car(String model){
        this.model = model;
    }

    void getCar(){

        System.out.println(model +" " + price + " ");
    }
}
