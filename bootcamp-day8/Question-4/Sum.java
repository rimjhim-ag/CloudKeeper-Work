
import java.util.*;

public class Sum {


    List<Integer> returnSum(int[] arr, int sum){

        HashMap<Integer,Integer> map = new HashMap<>();

        for(int i=0;i<arr.length;i++){
             int target = sum - arr[i];
            if(map.containsKey(target)){

                int value = map.get(target);
                  return  Arrays.asList(value, i) ;
            }

             map.put(arr[i], i);


        }



      return Collections.emptyList();

    }
}
