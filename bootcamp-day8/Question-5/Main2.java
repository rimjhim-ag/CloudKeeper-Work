
import java.util.*;

public class Main2 {



    public static void main(String[] args) {
        SortedList obj = new SortedList();


        ArrayList<Integer> a = new ArrayList<>(Arrays.asList(1, 3, 5, 6));
        ArrayList<Integer> b = new ArrayList<>(Arrays.asList(2, 4, 7, 9));

         obj.MergeList(a,b).forEach( (c) -> {
             System.out.println(c);
         });






    }
}
