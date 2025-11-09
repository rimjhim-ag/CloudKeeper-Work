

public class Sum{

       public void getSum(int num){
            int result = 0;
            while(num != 0){

                int digit = num%10;
                result += digit;

                num = num/10;


            }
           System.out.println(result);


}}

