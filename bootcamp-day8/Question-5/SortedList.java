import java.util.*;


public class SortedList {

   public ArrayList<Integer> MergeList(ArrayList<Integer> a, ArrayList<Integer> b){


        ArrayList <Integer> mergedList = new ArrayList<>();
         int i, j;

        for( i=0, j=0; i < a.size() && j < b.size() ; ){
                if(a.get(i) > b.get(j)){

                        mergedList.add(b.get(j));
                        j++;
                }
                else{

                    mergedList.add(a.get(i));
                    i++;
                }
        }

        while(i != a.size()){
             mergedList.add(a.get(i));
             i++;
        }
       while(j != b.size()){
           mergedList.add(b.get(j));
           j++;
       }


        return mergedList;

    }
}
