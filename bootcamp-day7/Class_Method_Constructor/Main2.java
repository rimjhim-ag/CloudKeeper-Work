public class Main2 {

   public static void main(String[] args){
    Calculator obj = new Calculator();
    Student student1 = new Student("Rim", 60,60,65);

    BankAcc customer = new BankAcc("Rimjhim", 123456789, 5000);
       BankAcc customer1 = new BankAcc("Rihim", 1256789, 500);



    System.out.println(obj.add(8.8,9.8));
       System.out.println("Total Marks :"+ student1.getTotalMarks());
       student1.getAverageMarks();

       customer.getCustomer();


}}
