import java.util.ArrayList;

public class Customer {

    private int id;
    private String name;
    private String email;


public Customer(){

}

public Customer(String name, String email, int id){
     this.name = name;
     this.email = email;
     this.id = id;
}

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public double getSalary() { return id; }
    public void setSalary(int id) { this.id = id; }


    @Override
    public String toString() {
        return "Customer [name=" + name + ", email=" + email + ", id=" + id + "]";
    }


    public static  void main(String[] args){
        ArrayList<Customer> list = new ArrayList<>();

         list.add(new Customer("Rim","rimjhim@gmail.com", 3));
        list.add(new Customer("Muskan","muskan@gmail.com", 4));
        list.add(new Customer("Shreya","shreya@gmail.com", 5));


        for(Customer c : list){
             System.out.println(c.toString());
        }





    }



}

