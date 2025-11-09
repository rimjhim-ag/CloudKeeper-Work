

public class Factorial {

    public void getFactorial(int num){
         int result = 1;
        for(int i=2;i<=num;i++){
            result *= i;
        }

        System.out.println(result);
    }
}
