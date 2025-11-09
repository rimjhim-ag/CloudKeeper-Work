import java.util.Scanner;

public class Division_Exception {

    public static  void main(String[] args){
         Scanner sc = new Scanner(System.in);

         System.out.println("Give two integer for operations ");

        int a =   sc.nextInt();
         int b = sc.nextInt();
         int result =0;

         try{
              result = a/b;
         }
         catch(Exception e){
              System.out.println(e.getMessage());
         }
         finally {
             System.out.println("Division Completed :" + result);
         }
    }


}
