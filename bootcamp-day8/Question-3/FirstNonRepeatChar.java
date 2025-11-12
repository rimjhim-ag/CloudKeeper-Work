import java.util.*;


public class FirstNonRepeatChar {


    public  static  void main(String[] args){


          String s = "Aadrhgdrh";
           char[] arr = (s.toLowerCase()).toCharArray();

        HashMap<Character, Integer> map = new HashMap<>();

           for (int i=0;i<arr.length;i++){




                   map.put(arr[i], map.getOrDefault(arr[i], 0)+1);


           }



         for(Map.Entry<Character, Integer> entry : map.entrySet()){

             if(entry.getValue() == 1){
                 System.out.print(entry.getKey());
                 break;
             };

         }




    }
}
