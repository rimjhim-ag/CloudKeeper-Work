import java.util.Scanner;

public class InvalidEmail_Exception extends Exception{

    InvalidEmail_Exception(String message){
            super(message);
    }



    public static void main(String[] args){

          Scanner sc = new Scanner(System.in);
          System.out.println("Write your email");
          String email = sc.next();

          try{
          if(!email.contains("@")){
              throw new InvalidEmail_Exception("Invalid Email");
          }else{
          System.out.println("Email is correct");}
          }
          catch (InvalidEmail_Exception e){
              System.out.println(e.getMessage());
          }
          finally
          {
              System.out.println("Email Validation done !");
          }
    }

}





