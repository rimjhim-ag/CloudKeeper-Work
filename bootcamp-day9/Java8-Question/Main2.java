import java.util.*;
import java.util.stream.Collectors;

public class Main2 {

    public static void main(String[] args){

        List<Integer> nums = Arrays.asList(3, 10, 15, 8, 21, 14, 7);


        // Functional Interface
        //Lambda Expressions

          NumberRule isEven = (a) -> {

                 if(a%2==0){
                     return true;
                 }
                 else{
                     return false;
                 }
          };
        NumberRule isPrime = (a) -> {
    int count = 0;
            for(int i=2;i<a;i++){
                   if(a%i == 0){
                       count++;
                   }
            }

            if(count !=0){
                return false;
            }
            else{
                return true;
            }
        };

        //Stream Operations

     List<Integer> result  =      nums.stream().filter( n ->
              isEven.apply(n) && isPrime.apply(n)


          ).map(a -> a*a ).collect(Collectors.toList());


        Optional<Integer> firstSquared = result.stream().findFirst();


        firstSquared.ifPresentOrElse(
                val -> System.out.println("First squared number: " + val),
                () -> System.out.println("No matching number found")
        );






    }
}
